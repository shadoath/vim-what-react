import { VimKey, T, H, TwoCol } from './VimKey'

export const Lesson9 = () => (
  <TwoCol
    left={
      <>
        <H>Marks & jumps:</H>
        <T>
          <VimKey k='m' v='extra' /> + letter sets a mark at the cursor position.{' '}
          <VimKey k='`' v='motion' /> + letter jumps back to the exact
          position. <VimKey k="'" v='motion' /> + letter jumps to the line.
        </T>
        <T>
          Lowercase marks (<VimKey k='a' />–<VimKey k='z' />) are per-buffer.
          Uppercase (<VimKey k='A' />–<VimKey k='Z' />) are global across files.
        </T>
        <T>
          <VimKey k='g' v='motion' /> is a prefix for many commands:{' '}
          <VimKey k='gg' v='motion' /> jumps to top of file,{' '}
          <VimKey k='gd' v='motion' /> goes to local definition,{' '}
          <VimKey k='gf' v='motion' /> opens file under cursor.
        </T>
        <T>
          <VimKey k='_' v='motion' /> jumps to the first non-blank of the current
          line (like <VimKey k='^' v='motion' /> but also works as a motion with
          operators).
        </T>
      </>
    }
    right={
      <>
        <H>Macros & advanced:</H>
        <T>
          <VimKey k='q' v='extra' /> + letter starts recording a macro.{' '}
          <VimKey k='q' v='extra' /> again stops recording.{' '}
          <VimKey k='@' v='extra' /> + letter replays it.{' '}
          <VimKey k='@@' v='extra' /> repeats the last macro.
        </T>
        <T>
          <VimKey k='z' v='extra' /> is a prefix for fold & scroll commands:{' '}
          <VimKey k='zo' /> opens a fold, <VimKey k='zc' /> closes,{' '}
          <VimKey k='zR' /> opens all, <VimKey k='z.' /> centers the line.
        </T>
        <T>
          <VimKey k='R' v='insert' /> enters replace mode — typing overwrites
          existing characters rather than inserting.
        </T>
        <T>
          <VimKey k='U' v='command' /> undoes all changes on the current line.{' '}
          <VimKey k='ZZ' v='command' /> saves and quits.{' '}
          <VimKey k='ZQ' v='command' /> quits without saving.
        </T>
      </>
    }
  />
)
