import { storyblokEditable } from "@storyblok/react";

const Hero = ({ blok }) => {
  const { image, headline, layout, _uid, brightness } = blok;
  return (
    <>
      {layout === "fullWidth" ? (
        <section
          {...storyblokEditable(blok)}
          key={_uid}
          className="min-h-[500px] relative text-center"
        >
          <h1 className="absolute inset-0 pt-20 mb-3 text-6xl font-bold text-white">
            {headline}
          </h1>
          <img
            src={`${image.filename}/m/1920x500/filters:brightness(${brightness})`}
            alt={image.altText}
            className="object-cover w-full h-full "
          />
        </section>
      ) : (
        <section
          key={_uid}
          {...storyblokEditable(blok)}
          className="container items-center grid-cols-2 gap-10 mx-auto mt-16 md:grid"
        >
          <div className="mb-10">
            <h1 className="mb-5 text-4xl font-bold md:text-6xl max-w-[400px]">
              {headline}
            </h1>
          </div>
          <div>
            <img src={`${image.filename}/m/670x840`} alt={image.altText} />
          </div>
        </section>
      )}
    </>
  );
};

export default Hero;
