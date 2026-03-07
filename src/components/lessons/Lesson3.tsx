import { VimKey, T, H, TwoCol } from './VimKey'

export const Lesson3 = () => (
  <TwoCol
    left={
      <>
        <H>Word motions:</H>
        <T>
          <VimKey k='w' v='motion' /> moves to the start of the next word.{' '}
          <VimKey k='b' v='motion' /> moves back.{' '}
          <VimKey k='e' v='motion' /> moves to the end of the current word.
        </T>
        <T>
          <VimKey k='W' v='motion' />
          <VimKey k='B' v='motion' />
          <VimKey k='E' v='motion' /> are the same but treat any non-blank sequence
          as a WORD (ignoring punctuation).
        </T>
        <T>
          <VimKey k='d' v='operator' /> is the delete operator — follow it with
          any motion: <VimKey k='d' v='operator' />
          <VimKey k='w' v='motion' /> deletes a word,{' '}
          <VimKey k='d' v='operator' />
          <VimKey k='d' v='operator' /> deletes the whole line.
        </T>
        <T>
          <VimKey k='c' v='operator' /> (change) works like{' '}
          <VimKey k='d' v='operator' /> but leaves you in insert mode:{' '}
          <VimKey k='c' v='operator' />
          <VimKey k='w' v='motion' /> replaces a word.
        </T>
      </>
    }
    right={
      <>
        <H>Shorthand operators:</H>
        <T>
          <VimKey k='D' v='command' /> is shorthand for{' '}
          <VimKey k='d' v='operator' />
          <VimKey k='$' v='motion' /> — deletes from cursor to end of line.
        </T>
        <T>
          <VimKey k='C' v='insert' /> is shorthand for{' '}
          <VimKey k='c' v='operator' />
          <VimKey k='$' v='motion' /> — changes to end of line, entering insert
          mode.
        </T>
        <T>
          <VimKey k='r' v='command' /> followed by any character replaces just the
          character under the cursor — no insert mode needed.
        </T>
        <T>
          Counts work everywhere: <VimKey k='3' />
          <VimKey k='d' v='operator' />
          <VimKey k='w' v='motion' /> deletes 3 words,{' '}
          <VimKey k='2' />
          <VimKey k='c' v='operator' />
          <VimKey k='w' v='motion' /> changes 2 words.
        </T>
      </>
    }
  />
)
