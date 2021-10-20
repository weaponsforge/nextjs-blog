import Image from 'next/image'

function Profile () {
  return (
    <Image
      src='/images/weaponsforge.jpg'
      height={400}
      width={400}
      alt='Weapons Forge'
    />
  )
}

export default Profile
