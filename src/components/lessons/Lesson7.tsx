import { VimKey, T, H, TwoCol } from './VimKey'

export const Lesson7 = () => (
  <TwoCol
    left={
      <>
        <H>Visual mode:</H>
        <T>
          <VimKey k='v' v='extra' /> enters character-wise visual mode. Use any
          motion to extend the selection, then press an operator to act on it.
        </T>
        <T>
          <VimKey k='V' v='extra' /> enters line-wise visual mode — always selects
          whole lines.
        </T>
        <T>
          <VimKey k='CTRL-v' v='extra' /> selects a rectangular block. Type a
          number and then <VimKey k='I' v='insert' /> to insert text at the start
          of each selected line.
        </T>
        <T>
          In visual mode, <VimKey k='o' v='insert' /> moves the cursor to the
          other end of the selection.
        </T>
      </>
    }
    right={
      <>
        <H>Indentation & format:</H>
        <T>
          <VimKey k='>' v='operator' /> + motion indents lines.{' '}
          <VimKey k='>>' v='operator' /> indents the current line.{' '}
          In visual mode, <VimKey k='>' v='operator' /> indents the selection.
        </T>
        <T>
          <VimKey k='<' v='operator' /> unindents.{' '}
          <VimKey k='<<' v='operator' /> unindents the current line.
        </T>
        <T>
          <VimKey k='=' v='operator' /> auto-indents a range.{' '}
          <VimKey k='==' v='operator' /> auto-indents the current line.{' '}
          <VimKey k='gg' />
          <VimKey k='=' v='operator' />
          <VimKey k='G' v='motion' /> reformats the whole file.
        </T>
        <T>
          <VimKey k='!' v='operator' /> filters a range through an external
          command: <VimKey k='!' v='operator' />
          <VimKey k='G' v='motion' />
          <VimKey k='sort' /> sorts lines to end of file.
        </T>
      </>
    }
  />
)
