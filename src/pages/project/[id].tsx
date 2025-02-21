import { useRouter } from 'next/router';

function ProjectDetailsPage() {
  const router = useRouter();
  const { id } = router.query;

  return <div>hi, {id}</div>;
}

export default ProjectDetailsPage;
