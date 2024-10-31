import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const promise1 = uploadPhoto();
  const promise2 = createUser();

  return Promise.all([promise1, promise2]).then((res) => {
    const [{ body: x },
      { firstName: y, lastName: z }] = res;
    console.log([x, y, z].join(' '));
  }).catch(() => console.log('Signup system offline'));
}
