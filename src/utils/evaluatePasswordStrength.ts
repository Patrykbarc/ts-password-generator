import { PasswordGeneratorSettings } from "./interfaces";

export function evaluatePasswordStrength(
  passwordConfig: PasswordGeneratorSettings,
) {
  const {
    includeCapitalLetters,
    includeLetters,
    includeNumbers,
    includeSpecialChars,
    passwordLength,
  } = passwordConfig;

  let strengthScore = 0;

  // Obecność zarówno małych, jak i dużych liter jest bardziej pożądana
  if (includeLetters && includeCapitalLetters) {
    strengthScore += 3; // Trzy punkty za obecność obu rodzajów liter
  } else if (includeLetters) {
    strengthScore += 1; // Jeden punkt za obecność tylko małych liter
  }

  // Liczby zwiększają złożoność hasła
  if (includeNumbers) {
    strengthScore += 2; // Dwa punkty za obecność liczb
  }

  // Znaki specjalne znacząco zwiększają bezpieczeństwo hasła
  if (includeSpecialChars) {
    strengthScore += 4; // Cztery punkty za obecność znaków specjalnych
  }

  // Długość hasła jest krytycznym czynnikiem bezpieczeństwa
  if (passwordLength >= 12) {
    strengthScore += 3; // Trzy punkty za długość hasła 12 znaków lub więcej
  } else if (passwordLength >= 10) {
    strengthScore += 2; // Dwa punkty za długość hasła od 10 do 11 znaków
  } else if (passwordLength >= 8) {
    strengthScore += 1; // Jeden punkt za długość hasła od 8 do 9 znaków
  }

  // Ocenianie siły hasła na podstawie zgromadzonych punktów
  if (strengthScore >= 10) {
    return "Very strong"; // Bardzo mocne
  } else if (strengthScore >= 7) {
    return "Strong"; // Mocne
  } else if (strengthScore >= 4) {
    return "Medium"; // Średnie
  } else if (strengthScore >= 2) {
    return "Weak"; // Słabe
  } else {
    return "Very weak"; // Bardzo słabe
  }
}
