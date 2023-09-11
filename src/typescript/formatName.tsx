interface User {
  firstName: string
  lastName: string
  userNummer: number
}

interface AdminUser {
  __typeName: 'user';
  firstName: string
  lastName: string
  mitarbeiterNummer: number;
}

interface FormatNameUser {
  __typeName: 'user';
  firstName: string;
  lastName: string;
}

function formatName(user: FormatNameUser) {
  return `${user.firstName} ${user.lastName}`;
}

const user: AdminUser = {
  firstName: "Miriam",
  lastName: "Janssen",
  mitarbeiterNummer: 123,
  __typeName: 'user',
};

const element = <h1>👋, {formatName(user)}!</h1>;
