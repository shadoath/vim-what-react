import { VimKey, T, H, TwoCol } from './VimKey'

export const Lesson4 = () => (
  <TwoCol
    left={
      <>
        <H>Find on line:</H>
        <T>
          <VimKey k='f' v='motion' /> + char jumps the cursor to the next
          occurrence of that character on the current line.{' '}
          <VimKey k='F' v='motion' /> searches backwards.
        </T>
        <T>
          <VimKey k='t' v='motion' /> + char moves to just <em>before</em> the
          character. <VimKey k='T' v='motion' /> does the same backwards.
        </T>
        <T>
          <VimKey k=';' v='motion' /> repeats the last{' '}
          <VimKey k='f' v='motion' />/<VimKey k='t' v='motion' /> in the same
          direction. <VimKey k=',' v='motion' /> repeats in the opposite direction.
        </T>
        <T>
          All four are motions — combine with operators:{' '}
          <VimKey k='d' v='operator' />
          <VimKey k='f' v='motion' />
          <VimKey k=',' /> deletes from cursor up to and including the next comma.
        </T>
      </>
    }
    right={
      <>
        <H>Substitution:</H>
        <T>
          <VimKey k='s' v='insert' /> deletes the character under the cursor and
          enters insert mode (substitute character).
        </T>
        <T>
          <VimKey k='S' v='insert' /> clears the entire current line and enters
          insert mode (substitute line).
        </T>
        <T>
          <VimKey k='s' v='insert' /> is effectively{' '}
          <VimKey k='x' v='command' />
          <VimKey k='i' v='insert' /> in one keystroke — useful for replacing a
          character with more than one character.
        </T>
        <T>
          Add a count: <VimKey k='3' />
          <VimKey k='s' v='insert' /> deletes 3 characters and enters insert mode.
        </T>
      </>
    }
  />
)
