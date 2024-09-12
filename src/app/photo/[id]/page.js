import Image from "next/image";
import image_bear from '@/assets/images/bear.jpg'
import image_transport from '@/assets/images/transport.jpg'

export default function PhotoPage ({ params }) {
    const photos = [
        { id: '1', value: image_bear },
        { id: '2', value: image_transport },
    ]

    const photo = photos.find(p => p.id === params.id) || photos[0];

    return (
        <div>
            this is a picture page
            <Image src={photo.value} width={50} alt="picture" />
        </div>
    )
}