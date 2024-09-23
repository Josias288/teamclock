import { Avatar } from "@/ui/design/avatar/avatar";
import { Typography } from "@/ui/design/typography/typography";
import { Container } from "postcss";

interface Props {
  nom: string;
  localisation?: string;
  avatarSrc: string;
  heure?: string;
  key?: string;
}

export const Team = ({ nom, localisation, avatarSrc, heure ,key}: Props) => {
  return (
    <div className="flex items-center justify-between py-1 bg-white rounded">
      <div className="flex items-center">
        <Avatar src={avatarSrc} alt={nom} size="medium"/>
        <div className="ml-4">
          <Typography
            variant="body-lg"
            theme="white"
            component="h5"
            className=""
            weight="bold"
          >
            {nom}
          </Typography>
          <Typography
            variant="body-sm"
            theme="gray"
            component="div"
            className=""
            weight="medium"
          >
            {localisation}
          </Typography>
        </div>
      </div>

      <Typography
        variant="body-sm"
        theme="gray"
        component="div"
        className="text-lg text-left"
      >
        {heure}
      </Typography>
    </div>
  );
};
