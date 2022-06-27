import './HomePage.css'
import products from './data';

export default function HomePage(){
    const categories = [
        'iphone', 'samsung', 'oppo', 'xiaomi', 'vivo', 'realme', 'nokia', 'itel','Masstel'
    ]
    return(
        <div>
            {
                categories.map((category, iC) => {
                    return (
                        <section key={iC}>
                            <div className="title-phone">
                                <h3>
                                    {category.toUpperCase()}
                                </h3>
                            </div>
                            <div className="container-productbox">
                                <ul className="list-product">
                                    <li className="iteam_box">
                                        {
                                            products.filter((v, i) => {
                                                return v.category === category
                                            }).map((v, i) => {
                                                return (
                                                    <a href='' className="main_box">
                                                        <div className="item-img item-img_42">
                                                            <img className='' src={v.img} width="207" height="207"></img>
                                                        </div>
                                                        <h3>
                                                            {v.name}
                                                        </h3>
                                                        <strong className='price'>Giá từ: {v.price}₫</strong>
                                                        <p className="item-where">Có tất cả : {v.count} nơi bán</p>
                                                    </a>
                                                )
                                            })
                                        }    
                                    </li>
                                </ul>
                            </div>
                        </section>
                    )
                })
            }
        </div>
    );
}