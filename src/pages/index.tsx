import localFont from "next/font/local";
import { Container } from "@/ui/components/container/container";
import { Typography } from "@/ui/design/typography/typography";
import clsx from "clsx";
import { Button } from "@/ui/design/button/button";
import { RiPlayFill } from "react-icons/ri";
import { Clock } from "@/ui/components/clock/clock";
import { Database } from "@/db/db";
import { Team } from "@/ui/components/team/team";
import { v4 as uuidv4 } from "uuid";


export default function Home() {
  let theme= "";
  let themeStyles = "";
  switch (theme) {
    case 'white':
      themeStyles="bg-white";
      break;
    case 'black':
      themeStyles="bg-gray";
      break;
  }

  
  const TeamList = () => {
    return (
      <div>
        {Database.map((member) => (
          <Team
            key={uuidv4()}
            nom={member.nom}
            avatarSrc={member.avatarSrc}
            heure={member.heure}
            localisation={member.localisation}
          />
        ))}
      </div>
    );
  };

  return (
    <Container className={clsx(themeStyles)}>
      <div className="bg-gray-white">
        <Container className="grid grid-cols-12 gap-24 py-24">
          <div className={clsx("grid grid-cols-1 col-span-3 gap-0", themeStyles)}>
            <Typography
              variant="h4"
              component="h4"
              theme="white"
              className="mb-0"
            >
              Remote Type Clock Component
            </Typography>
            <div className="">
              <Button
                variant="accent"
                className="rounded-full"
                action={() => {}}
                iconPosition={"left"}
                icon={{ icon: RiPlayFill }}
                size="medium"
                theme="white"
              >
                Prototype
              </Button>
            </div>
          </div>
          <div className="grid grid-rows-[auto,1fr] col-span-9 border-2 border-gray-500 rounded h-full py-4 ">
            <div className="bg-white flex items-center gap-4 ms-8">
              <Typography variant="lead" component="h6" theme="white">
                Team
              </Typography>
              <Typography
                variant="body-sm"
                component="span"
                theme="gray"
                className="flex items-center"
              >
                <div className="w-1 h-1 bg-green rounded-full mr-1" ></div>
                Online
              </Typography>
            </div>

            <Container className="w-full bg-white h-full grid grid-cols-12 gap-4">
              <div className="grid-cols-1 col-span-4  ">
                <Clock />
              </div>
              <div className="grid-cols-1 col-span-1 bg-white">
                <Button variant="toggle" size="small"></Button>
              </div>
              <Container className="grid-cols-1 col-span-7 bg-white">
                <TeamList />
              </Container>
            </Container>
          </div>
        </Container>
      </div>
    </Container>
  );
}
