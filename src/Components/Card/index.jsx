export const Card = (data) => {
    //console.log(data);
    return (
        <div className='bg-white cursor-pointer w-56 rounded-md'>
            <figure className='relative w-full h-4/5  bg-white/60 '>
                <img 
                    //src='https://www.sennheiser.com/globalassets/digizuite/45735-en-hd_490_pro_product_shot_in_use_axis_audio_69.jpg/SennheiserHighlight' 
                    src={data.data.images[0]}
                    alt={data.data.title}
                    className='rounded-md w-full h-full object-cover'
                ></img>
                <span className='absolute bottom-0 left-0 bg-white/60 text-black/60 text-sm rounded-sm px-4'>{data.data.category.name}</span>
                <div>
                    <span className="material-symbols-outlined absolute top-0 right-0 m-1 justify-center items-center w-6 h-6 text-white hover:text-orange-400">add_shopping_cart</span>
                </div>
            </figure>
            <p className='flex justify-between  bg-white items-center px-1'>
                <span className='text-lg font-bold'>${data.data.price}</span>
                <span className='text-sm font-light'>{data.data.title}</span>
            </p>
        </div>
    )
}