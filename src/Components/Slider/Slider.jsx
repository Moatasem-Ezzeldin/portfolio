import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import {Card} from "../index"

const Slider = ({ projects }) => {
  return (
    <Swiper
      modules={[Navigation]}
      slidesPerView="auto" // العرض التلقائي للشرائح
      spaceBetween={20} // المسافة بين الكروت
      grabCursor={true}
      navigation={true}
      centeredSlides={false} // اجعلها false في الشاشات الكبيرة
      slidesOffsetBefore={0}
      slidesOffsetAfter={0}
      className="py-8 px-0 relative"
      breakpoints={{
        320: {
          slidesPerView: 1, // على الشاشات الصغيرة يظهر كارد واحد فقط
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 2, // على الشاشات المتوسطة يظهر ثلاث كروت
          spaceBetween: 15,
          slidesOffsetBefore:52,
          slidesOffsetAfter:58,
        },
        992: {
          slidesPerView: 3, // على الشاشات الكبيرة يظهر أربع كروت
          spaceBetween: 15,
          // centeredSlides: false,
          slidesOffsetBefore:52,
          slidesOffsetAfter:58, // لا يتم تمركز الشرائح عند الشاشات الكبيرة
        },
        1200: {
          slidesPerView: 4, 
          slidesOffsetBefore:46,
          slidesOffsetAfter:46,// على الشاشات الكبيرة جدًا يظهر خمس كروت
          spaceBetween: 40,
          centeredSlides: false, // لا يتم تمركز الشرائح
        },
        1400: {
          slidesPerView: 4, 
          slidesOffsetBefore:42,
          slidesOffsetAfter:48,// على الشاشات الكبيرة جدًا يظهر خمس كروت
          spaceBetween: 40,
          centeredSlides: false, // لا يتم تمركز الشرائح
        },
      }}
    >
      {projects.map((item) => (
        <SwiperSlide key={item.id} className="flex-shrink-0">
          <div className="flex justify-center">
            {/* عرض الكارد ثابت 250px */}
            <div className="w-[250px] h-[340px]">
              <Card item={item} />
            </div>
          </div>
        </SwiperSlide>
      ))}
      <style>
        {
          `.swiper-button-next,
          .swiper-button-prev {
            color: #14b8a6;
            transition: color 0.3s ease;
          }
          .swiper-button-next:hover,
          .swiper-button-prev:hover {
            color: #81e6d9;
          }`
        }
      </style>
    </Swiper>
  );
};

export default Slider;