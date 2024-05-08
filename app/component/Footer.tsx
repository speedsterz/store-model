import React from "react";

const Footer = () => {
  return (
    <div className=" border py-12  bg-orange-100 ">
      <div className="w-9/12 md:w-8/12 mx-auto flex flex-row justify-around">
        <div className="flex flex-col gap-4 ">
          <h1 className="text-lg font-bold mb-2">راهنمای مشتریان</h1>
          <a href="#">پاسخ به پرسش های متداول</a>
          <a href="#">روش های ارسال کالا</a>
          <a href="#">شرایط بازگشت کالا</a>
          <a href="#">روش های پرداخت</a>
          <a href="#">قوانین و مقررات</a>
        </div>
        <div className="flex flex-col gap-4 ">
          <h1 className="text-lg font-bold mb-2">اطلاعات دیجی مارکت </h1>
          <a href="#">فروش به شرکت ها</a>
          <a href="#">فرصت های شغلی</a>
          <a href="#">فروش همکاری</a>
          <a href="#">ارتباط با ما</a>
          <a href="#">درباره ما</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
