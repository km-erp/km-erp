export class Trans{
  id: string;
  pl: string;
}

export const cTrans: Trans[] = [
// app
  {id: 'email', pl: 'email'},
  {id: 'emailSent', pl: 'Email wysłany pod adres "{0}"'},
  {id: 'forgotPwd', pl: 'Niepamiętam hasła'},
  {id: 'lblUser', pl: 'Użytkownik:'},
  {id: 'lblPassword', pl: 'Hasło:'},
  {id: 'lblPassword2', pl: 'Powtórz hasło:'},  
  {id: 'loginByEMail', pl: 'Zaloguj'},
  {id: 'loginByGoogle', pl: 'Logowanie za pomocą konta Google'},
  {id: 'loginByFacebook', pl: 'Logowanie za pomocą konta Facebook'},
  {id: 'newUser', pl: 'Zarejestruj nowego użytkownika'},
  {id: 'no', pl: 'Nie'},
  {id: 'registerByEmail', pl: 'Zarejestruj'},
  {id: 'registerEmail', pl: 'Czy chcesz zarejestrować nowego użytkownika dla "{0}"? Jeżeli jeżeli chcesz potwierdzić to wpisz w poniższe pola swoje nowe hasło (zapamiętaj je). Po potwierdzeniu klawiszem "Zarejestruj" będzie możliwe zalogowanie się. Czy kontynuować?'},
  {id: 'resetByEmail', pl: 'Wyślij restujący email'},
  {id: 'password', pl: 'hasło'},
  {id: 'usrEmpty', pl: 'Uzupełnij adres email w polu "Użytkownik"'},
  {id: 'usrPwd', pl: 'Wprowadź hasło'},
  {id: 'usrPwdDif', pl: 'Wprowadzone hasła są różne.'},
  {id: 'usrPwdMedium', pl: 'średnie'},
  {id: 'usrPwdStrong', pl: 'mocne'},
  {id: 'usrPwdWeak', pl: 'słabe'},
  {id: 'yes', pl: 'Tak'},
  {id: 'welcome', pl: 'Witamy w systemie KM-ERP'},
// firebase
  {id: 'auth/auth-domain-config-required', pl: 'Brak w konfiguracji domeny'},
  {id: 'auth/account-exists-with-different-credential', pl: 'Konto istnieje już ale z innym typem logowania'},
  {id: 'auth/cancelled-popup-request', pl: 'Anulowano żądanie wykakującego okienka'},
  {id: 'auth/email-already-in-use', pl: 'Podany adres "{0}" jest już w użyciu'},
  {id: 'auth/expired-action-code', pl: 'Wygasł kod akcji'},
  {id: 'auth/invalid-action-code', pl: 'Błędny kod akcji'},
  {id: 'auth/invalid-email', pl: 'Niepoprawny adres email'},
  {id: 'auth/invalid-oauth-provider', pl: 'Błędna klasa autoryzacji'},
  {id: 'auth/operation-not-allowed', pl: 'Niedozwolona operacja'},
  {id: 'auth/operation-not-supported-in-this-environment', pl: 'Operacja nie dozwolona w tym środowisku'},
  {id: 'auth/popup-blocked', pl: 'Zablokowane wyskaujące okienko'},
  {id: 'auth/popup-closed-by-user', pl: 'Wyskakujące okienko zablokowane przez użytkownika'},
  {id: 'auth/unauthorized-domain', pl: 'Nieautoryzowana domena'},
  {id: 'auth/user-cancelled', pl: 'Użytkownik anulował'},
  {id: 'auth/user-disabled', pl: 'Użytkownik wyłączony'},
  {id: 'auth/user-not-found', pl: 'Nieznany użytkownik'},
  {id: 'auth/weak-password', pl: 'Zbyt słabe hasło'},
  {id: 'auth/wrong-password', pl: 'Błędne hasło lub brak hasła'}
]
  
