import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const promise1 = uploadPhoto();
  const promise2 = createUser();

  Promise.all([promise1, promise2]).then((res) => {
    const [{ body: x },
      { firstName: y, lastName: z }] = res;
    console.log(x, y, z);
  });
}
