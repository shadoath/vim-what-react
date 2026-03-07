import { VimKey, T, H, TwoCol } from './VimKey'

export const Lesson2 = () => (
  <TwoCol
    left={
      <>
        <H>Basics:</H>
        <T>
          <VimKey k='f' v='motion' /> followed by a key moves the cursor to the
          next instance of that character on the current line.{' '}
          <VimKey k='F' v='motion' /> does the same backwards.
        </T>
        <T>
          <VimKey k='t' v='motion' /> and <VimKey k='T' v='motion' /> do the
          same, but stop right before the character.
        </T>
        <T>
          <VimKey k='d' v='operator' />
          (delete) followed by any motion deletes the text between the cursor
          and that motion's destination: <VimKey k='d' v='operator' />
          <VimKey k='w' v='motion' />, <VimKey k='d' v='operator' />
          <VimKey k='f' v='motion' />
          <VimKey k='-' />
        </T>
        <T>
          <VimKey k='c' v='operator' />
          (change) does the same, but leaves you in insert mode.
        </T>
        <T>
          Some motions like <VimKey k='j' v='motion' /> and{' '}
          <VimKey k='k' v='motion' /> are linewise – deletion includes the full
          start/end lines.
        </T>
        <T>
          <VimKey k='.' v='command' /> repeats the last editing action. Motion
          is recalculated at the new place.
        </T>
      </>
    }
    right={
      <>
        <H>Extras:</H>
        <T>
          <VimKey k='d' v='operator' />
          <VimKey k='2' />
          <VimKey k='w' v='motion' /> to delete up to the second word.
        </T>
        <T>
          <VimKey k='d' v='operator' />
          <VimKey k='2' />
          <VimKey k='t' v='motion' />
          <VimKey k='.' /> to delete up to but not including the second comma.
        </T>
        <T>
          <VimKey k='2' />
          <VimKey k='i' v='insert' /> repeats the text after you press{' '}
          <VimKey k='Esc' /> to finish the input session.
        </T>
        <T>
          Repeat operator (<VimKey k='c' v='operator' />
          <VimKey k='c' v='operator' /> or <VimKey k='d' v='operator' />
          <VimKey k='d' v='operator' />) to operate on the current line.
        </T>
        <T>
          In vim, <VimKey k='v' v='extra' /> enters visual mode. Move with
          motions, then press an operator to act on the selection.
        </T>
        <T>
          <VimKey k='V' v='extra' /> enters visual-lines mode – like{' '}
          <VimKey k='v' v='extra' />, but selects whole lines.
        </T>
        <T>
          <VimKey k='CTRL-v' v='extra' /> selects rectangular blocks.
        </T>
      </>
    }
  />
)
