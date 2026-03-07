import { VimKey, T, H, TwoCol } from './VimKey'

export const Lesson1 = () => (
  <TwoCol
    left={
      <>
        <H>Basics:</H>
        <T>
          <VimKey k='h' v='motion' />
          <VimKey k='j' v='motion' />
          <VimKey k='k' v='motion' />
          <VimKey k='l' v='motion' /> are vi/vim cursor keys – much closer than
          regular cursor keys!
        </T>
        <T>
          Use <VimKey k='i' v='insert' /> to enter insert mode, cursor becomes a
          vertical line. Use <VimKey k='Esc' /> to return to normal mode.
        </T>
        <T>
          Use <VimKey k='x' v='command' /> to delete the current character, or{' '}
          <VimKey k='X' v='command' /> to delete the one to the left.
        </T>
        <T>
          Use <VimKey k='A' v='insert' /> to insert text at the end of the line
          (wherever you are!).
        </T>
        <T>
          <em>
            (Note: insert mode is very similar to a regular editor — cursor
            keys, backspace, delete all work.)
          </em>
        </T>
      </>
    }
    right={
      <>
        <H>Extras:</H>
        <T>
          <VimKey k='u' v='command' /> undoes the last action – vi has a single
          level, vim supports unlimited undo (<VimKey k='CTRL-R' /> to redo).
        </T>
        <T>
          <VimKey k='0' v='motion' /> jumps to the beginning of the line,{' '}
          <VimKey k='$' v='motion' /> to the end, <VimKey k='^' v='motion' /> to
          the first non-blank.
        </T>
        <T>
          Use <VimKey k='w' v='motion' />
          <VimKey k='b' v='motion' />
          <VimKey k='e' v='motion' /> to move along 'words' (alphanumeric or
          punctuation runs):
          <br />
          <VimKey k='quux' />
          <VimKey k='(' />
          <VimKey k='foo' />
          <VimKey k=',' />
          &thinsp;
          <VimKey k='bar' />
          <VimKey k=',' />
          &thinsp;
          <VimKey k='baz' />
          <VimKey k=')' />
          <VimKey k=';' />
        </T>
        <T>
          Use <VimKey k='W' v='motion' />
          <VimKey k='B' v='motion' />
          <VimKey k='E' v='motion' /> for WORDs (any non-blank sequence):
          <br />
          <VimKey k='quux(foo,' />
          &thinsp;
          <VimKey k='bar,' />
          &thinsp;
          <VimKey k='baz);' />
        </T>
        <T>
          Use <VimKey k='R' v='insert' /> to enter insert mode with an
          overstrike cursor, typing over existing characters.
        </T>
        <T>
          <VimKey k=':' v='extra' />
          <VimKey k='w' v='command' /> + Enter to save,&ensp;
          <VimKey k=':' v='extra' />
          <VimKey k='q' v='command' /> + Enter to quit.
        </T>
      </>
    }
  />
)
