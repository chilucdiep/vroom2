import Image from "next/image";

import StarFilledIcon from "../../images/StarFilledIcon.svg";
import StarHalfIcon from "../../images/StarHalfIcon.svg";
import StarEmptyIcon from "../../images/StarEmptyIcon.svg";

interface RatingsProps {
  stars: number;
}

export function Ratings({ stars }: RatingsProps) {
  const starArray = [];
  const MAX_STARS = 5;

  for (let i = 0; i < Math.floor(stars); i++) {
    starArray.push(StarFilledIcon);
  }

  if (stars % 1 !== 0) {
    starArray.push(StarHalfIcon);
  }

  while (starArray.length < MAX_STARS) {
    starArray.push(StarEmptyIcon);
  }

  const starMarkup = starArray.map((star) => (
    <Image src={star} alt="Star" height={18} key={star} />
  ));

  return <div style={{ marginBottom: ".5em" }}>{starMarkup}</div>;
}
