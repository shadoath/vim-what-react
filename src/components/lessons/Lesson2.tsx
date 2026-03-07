import { VimKey, T, H, TwoCol } from './VimKey'

export const Lesson2 = () => (
  <TwoCol
    left={
      <>
        <H>Insert & line basics:</H>
        <T>
          <VimKey k='A' v='insert' /> inserts at the <em>end</em> of the line.{' '}
          <VimKey k='I' v='insert' /> inserts at the <em>beginning</em>.
        </T>
        <T>
          <VimKey k='o' v='insert' /> opens a new line <em>below</em> and enters
          insert mode. <VimKey k='O' v='insert' /> does the same <em>above</em>.
        </T>
        <T>
          <VimKey k='X' v='command' /> deletes the character to the <em>left</em>{' '}
          of the cursor (like backspace in normal mode).
        </T>
        <T>
          <VimKey k='.' v='command' /> repeats the last editing action at the
          current position. One of the most powerful keys in Vim!
        </T>
      </>
    }
    right={
      <>
        <H>Line motions:</H>
        <T>
          <VimKey k='^' v='motion' /> jumps to the first non-blank character on
          the line. <VimKey k='$' v='motion' /> jumps to the end of the line.{' '}
          <VimKey k='0' v='motion' /> jumps to column 0.
        </T>
        <T>
          <VimKey k='-' v='motion' /> moves to the first non-blank of the{' '}
          <em>previous</em> line.{' '}
          <VimKey k='+' v='motion' /> to the <em>next</em> line.
        </T>
        <T>
          Combine with <VimKey k='.' v='command' />: press{' '}
          <VimKey k='A' v='insert' />, type a semicolon, press <VimKey k='Esc' />,
          then <VimKey k='-' v='motion' />
          <VimKey k='.' v='command' /> to add one to the previous line too.
        </T>
      </>
    }
  />
)
