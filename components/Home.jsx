import SectionWrap from "./SectionWrap";
import MeetNsiskak from "./MeetNsikak";
import CampaignFeat from "./CampaignFeat";
import Header from "./Header";
import ProjectGallery from './ProjectGallery';
import CampaignTours from './CampaignTours';

export default function Home() {
  return (
    <>
      <Header />
      <CampaignFeat />
      <MeetNsiskak />
      <ProjectGallery/>
      <CampaignTours/>
    </>
  );
}
