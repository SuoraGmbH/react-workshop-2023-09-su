function formatName(user: typeof miriam) {
    console.log(typeof miriam)
    return `${user.firstName} ${user.lastName} (${user.age})`;
}
const miriam = {
    firstName: 'Miriam',
    lastName: 'Janssen',
    age: 27
};
const element = <h1>👋, {formatName(miriam)}!</h1>;
