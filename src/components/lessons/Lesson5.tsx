import { VimKey, T, H, TwoCol } from './VimKey'

export const Lesson5 = () => (
  <TwoCol
    left={
      <>
        <H>Yank & paste:</H>
        <T>
          <VimKey k='y' v='operator' /> is the yank (copy) operator — follow it
          with any motion: <VimKey k='y' v='operator' />
          <VimKey k='w' v='motion' /> yanks a word,{' '}
          <VimKey k='y' v='operator' />
          <VimKey k='y' v='operator' /> yanks the whole line.
        </T>
        <T>
          <VimKey k='Y' v='command' /> is shorthand for{' '}
          <VimKey k='y' v='operator' />
          <VimKey k='y' v='operator' /> — yanks the current line.
        </T>
        <T>
          <VimKey k='p' v='command' /> pastes after the cursor (or below the
          current line for linewise yanks).{' '}
          <VimKey k='P' v='command' /> pastes before.
        </T>
        <T>
          Text deleted with <VimKey k='d' v='operator' />,{' '}
          <VimKey k='c' v='operator' />, <VimKey k='x' v='command' /> is also
          yanked — so you can paste it with <VimKey k='p' v='command' />.
        </T>
      </>
    }
    right={
      <>
        <H>Transforms:</H>
        <T>
          <VimKey k='"' v='extra' /> + a letter before any yank/delete/paste selects
          a named register: <VimKey k='"' v='extra' />
          <VimKey k='a' />
          <VimKey k='y' v='operator' />
          <VimKey k='w' v='motion' /> yanks a word into register <VimKey k='a' />.
        </T>
        <T>
          <VimKey k='J' v='command' /> joins the current line with the next,
          removing the line break and adding a space.
        </T>
        <T>
          <VimKey k='~' v='command' /> toggles the case of the character under
          the cursor and advances. In visual mode, toggles all selected characters.
        </T>
      </>
    }
  />
)
