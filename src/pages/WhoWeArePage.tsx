import { useTranslation } from "react-i18next"; 
import MainLayout from "@/components/layouts/MainLayout";
import { processTextWithColorComponents } from "@/utilities/textProcessor";
import { getAssetUrl } from "@/utils/assets";

export default function WhoWeArePage() {
    const { t } = useTranslation();

  const aboutItems = ["item1", "item2", "item3"];


    return (
        <MainLayout
            heroSectionSlides={[
                {
                    id: 1,
                    imageSrc: getAssetUrl('/assets/img/all/5.png'),
                }
            ]}
            heroHeightVariant="1/2"
        >
            

<section className="cs-x-container cs-y-container flex flex-col gap-12">
  <div id="sobre-nós" className="flex justify-start lg:justify-center">
    <h1 className="text-green">{t('WhoWeArePage.section1.title')}</h1>
  </div>

<div className="flex flex-col xl:flex-row gap-12 items-center">
  <div className="hidden xl:block relative w-full xl:w-1/2 h-[500px]">
    <img
      src={getAssetUrl('/assets/img/all/Aline-guine.png')}
      alt="Kids Bantandja icons"
      className="w-full h-full object-cover drop-shadow-md rounded-xl"
    />
  </div>

  <div className="block xl:hidden relative w-full h-[500px]">
    <img
      src={getAssetUrl('/assets/img/all/bantaja-kids.png')}
      alt="Kids Bantandja"
      className="w-full h-full object-cover drop-shadow-md rounded-xl object-contain"
    />
  </div>

    <div className="w-full xl:w-1/2 flex flex-col justify-between items-center xl:items-start gap-6 xl:gap-8">
     {aboutItems.map((item) => (
  <div key={item} className="space-y-2 text-center xl:text-left">
    <h2 className="text-green font-bold">
      {t(`WhoWeArePage.section1.${item}.title`)}
    </h2>
    <p className="text-gray font-semibold leading-8">
      {processTextWithColorComponents(
        t(`WhoWeArePage.section1.${item}.description`)
      )}
    </p>
  </div>
))}

<div className="space-y-2 text-center xl:text-left">
  <h2 className="text-green font-bold">
    {t("HomePage.learnSection.title")}
  </h2>
  <p className="text-gray font-semibold leading-8">
    {t("HomePage.learnSection.subTitle")}
  </p>
</div>
</section>
</MainLayout>
    );
}
