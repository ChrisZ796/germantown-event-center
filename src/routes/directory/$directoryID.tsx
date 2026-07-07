import Sidebar from "@page-components/sidebar/Sidebar.tsx";
import Favorites from "@page-components/favorites/Favorites.tsx";
import { Container } from "@page-components/container/Container.tsx";
import { Header } from "@page-components/header/Header.tsx";
import {createFileRoute, useParams, useLocation} from "@tanstack/react-router"
import { useEffect, useState } from "react";
import { getUserInfo } from "@services/users/get-user-info.service.ts";
import { getOrgInfo } from "@services/orgs/get-org-info.service.ts";
import { Description } from "@page-components/description/Description.tsx";
import styles from "./directory.module.css";

export const Route = createFileRoute('/directory/$directoryID')({
  component: Directory
});

type Event = {
    postID: number; 
    title: string;
    eventDate: string;
}

interface DirectoryUserData {
  userID: number;
  username: string;
  firstname: string;
  lastname: string;
  eventsAttended: number;
  school: string;
  age: number;
  attendedEvents: Event[];
}

interface DirectoryOrganizationData {
  orgID: number;
  orgName: string;
  email: string;
  address: string;
  phoneNumber: string;
  linkedin: string;
  bio: string;
  eventsHosted: Event[];
}

function Directory() {

  const { directoryID } = useParams({ from: '/directory/$directoryID' });
  const [directoryInfo, setDirectoryInfo] = useState<DirectoryUserData | DirectoryOrganizationData>({
  userID: 1024,
  username: "jdoe_92",
  firstname: "John",
  lastname: "Doe",
  eventsAttended: 2,
  school: "State University",
  age: 21,
  attendedEvents: [
    {
      postID: 501,
      title: "Annual Tech Symposium",
      eventDate: "2023-11-15"
    },
    {
      postID: 722,
      title: "Career Fair Q4",
      eventDate: "2023-12-01"
    }
  ]
});
  const location = useLocation();
  const isOrg = location.state?.isOrg;

  useEffect(() => {
    if (isOrg) {
      getOrgInfo(Number(directoryID)).then((data) => {
        setDirectoryInfo(data);
    })
    }
    else {
      getUserInfo(Number(directoryID)).then((data) => {
        setDirectoryInfo(data);
      });
    }
  }, []);

  return (
    <div className={styles.container}>
      <Sidebar/>
      <Container className={styles.profileContainer}>
        <section className={styles.content}>
          <Header 
            name={'firstname' in directoryInfo ? directoryInfo.firstname : directoryInfo.orgName} 
            username={'username' in directoryInfo ? directoryInfo.username : undefined} 
            isOrg={isOrg} 
          />
        </section>
        <Description />
      </Container>
      <Favorites />
    </div>
  );
}