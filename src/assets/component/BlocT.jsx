// import Paragraph from "./Paragraph";
// import Image from "./Image";
// import Like from "./Like";

// export default function BlocT({ Props }) {  

//     return (

//         <div className='flex p-4 mt-4 border-b border-slate-800' >
//             <div>
//                 {Props.thumbnailUrl && <Image className=' rounded-full h-15 w-15 items-center  ' src={Props.thumbnailUrl} alt="image" />}
//             </div>
//             <div className='ml-6 '>
//                 <div className="flex m-2">
//                     <h2 className="text-white text-2xl font-bold"> {Props.title} </h2>
//                     <Image src="/src/assets/Images/Twitter UI Clone Design (Community)(3)/Icons/Verified.png" Alt="Placeholder image" className="w-6 h-6" />
//                     <Paragraph text={Props.id} />
//                 </div>
//                 <Paragraph text={Props.body} />
//                 {Props.url && <img className='pt-2 rounded-3xl  w-full objectif-cover h-60' src={Props.url} alt="" />}
//                 <div className='flex pt-5  gap-10' >
//                     <div className="flex">
//                         <Image src="/src/assets/Images/Svg/Icons/Reply.svg" />
//                         <Paragraph text={Props.like} />
//                     </div>
//                     <div className="flex">
//                         <Image src="/src/assets/Images/Svg/Icons/Retweet.svg" Name={Props.repost} />
//                         <Paragraph text={Props.repost} />
//                     </div>
//                     <div className="">
//                         <Like />
//                     </div>
//                     <Image src="/src/assets/Images/Svg/Icons/Share.svg" Name="" />
//                 </div>
//             </div>
//         </div>

//     );

// }