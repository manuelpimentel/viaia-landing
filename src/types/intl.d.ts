declare namespace Intl {
  class Segmenter {
    constructor(locale: string | string[], options?: { granularity?: "grapheme" | "word" | "sentence" });
    segment(input: string): Segments;
  }

  interface Segments extends Iterable<{ segment: string; index: number; input: string }> {
    containing(index: number): { segment: string; index: number; input: string };
  }
}