import { JournalLayout } from "../layout/JournalLayout";
import { NothingSelectedView, NoteView } from "../views";

export const HomePage = () => {
  return (
    <JournalLayout>
      {/*When Nothing */}
      {/* <NothingSelectedView/> */}
      <NoteView />
    </JournalLayout>
  );
};
