import NoteForm from '@/components/NoteForm/NoteForm';
import { getCategories } from '@/lib/api';

const CreateNote = async () => {
  const categories = await getCategories();
  console.log(categories);
  return (
    <div>
      CreateNote
      <NoteForm categories={categories} />
    </div>
  );
};

export default CreateNote;
