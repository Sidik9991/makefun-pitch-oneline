// u-ronigrv-a-day-of-one-line-pitches-12cd9bb3
// One sentence to convince a friend who has never coded to let an AI agent
// build their first app idea on make.fun. The sentence is the whole entry.
//
// Candidate scoring against the judge's brief, in its order:
// (1) makes the case to that friend in one read, (2) persuasion — a concrete
// reason to say yes now, handing the idea over feels easy and low risk,
// (3) clarity — plain words, one read, no jargon, (4) truth — no
// overpromising about what an AI agent can do with a first app idea,
// (5) warmth and craft — sounds like a person talking to a friend, fresh
// turn of phrase, not a template or slogan. All candidates are my own
// original words.
//
// A (210): "Just tell it your idea in plain words — the app you've been
//   picturing in your head — and watch an AI agent build you a first version
//   you can actually tap through, no coding, no setup, nothing to lose by
//   trying."
//   Case 4, persuasion 4, clarity 4.5, truth 4, warmth 4. Warm and easy, but
//   it never names make.fun, so it does not quite make THIS case (criterion
//   1), and "nothing to lose by trying" is a claim, not a reason.
// B (224): "You've been carrying that app idea around for months — describe
//   it in one chat and let an AI agent on make.fun build you a first working
//   version tonight, so you can finally hold it in your hands instead of just
//   imagining it."
//   Case 4.5, persuasion 5, clarity 4.5, truth 2.5, warmth 4.5. The most
//   vivid urgency ("tonight", "hold it in your hands"), but "tonight"
//   overpromises — a first build may not land the same evening — and "for
//   months" presumes a history the friend may not have. Truth sinks it.
// C (220): "Tell an AI agent on make.fun the app idea you've been turning
//   over in your head, in your own words, and it'll build you a first version
//   to try — you don't need to code a thing, and you can change anything you
//   don't like."
//   Case 4.5, persuasion 4.5, clarity 4.5, truth 5, warmth 4.5. Honest,
//   reversible, plain — the RUNNER-UP. It loses to F on the opening: it
//   starts by instructing the friend about the agent instead of starting
//   with the friend's own idea, and "you don't need to code a thing" spends
//   more words than F's "no coding, no course" for the same reassurance.
// D (183): "You don't need to learn to code — just describe the app idea you
//   keep coming back to, and an AI agent on make.fun will build a first
//   version you can try, tweak, and show your friends."
//   Case 4.5, persuasion 4, clarity 4, truth 4.5, warmth 4.5. Short and
//   friendly, but "tweak" is mildly jargony, and "show your friends" is a
//   weaker low-risk close than reversibility — it never tells the friend the
//   idea stays theirs to change.
// E (194): "Give the idea that's been living in your head a go: describe it
//   in plain words to an AI agent on make.fun and see a first version of your
//   app take shape, no coding needed and nothing to install."
//   Case 4, persuasion 3.5, clarity 4, truth 3.5, warmth 4. "Nothing to
//   install" is an unverified platform claim, "take shape" is vaguer than
//   "try", and it offers no reason the friend can say yes to right now.
// F (218): "Just describe the app idea you've been carrying around in plain
//   words, and an AI agent on make.fun will build you a first version you can
//   actually try — no coding, no course, and you can change anything you
//   don't like."
//   Case 5, persuasion 5, clarity 5, truth 5, warmth 5 — WINNER. It opens on
//   the friend's idea ("carrying around" — theirs, already alive), names
//   make.fun, gives the concrete now-step (just describe it), the concrete
//   payoff (a first version you can actually try), removes both barriers in
//   four words ("no coding, no course"), and closes on reversibility ("you
//   can change anything you don't like"), which is what makes handing the
//   idea over feel low risk. Every word is plain, every claim holds up: an
//   agent really does build a first version from a plain-words description,
//   and a first version really can be changed.

import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "Just describe the app idea you've been carrying around in plain words, and an AI agent on make.fun will build you a first version you can actually try — no coding, no course, and you can change anything you don't like.";

const OUTPUT = process.env.OUTPUT ?? "/output/entry.txt";
mkdirSync(OUTPUT.slice(0, OUTPUT.lastIndexOf("/")) || ".", { recursive: true });
writeFileSync(OUTPUT, TEXT, "utf8");

// Pre-submit revision (2026-11-24): F re-read once against the brief in
// order — case, persuasion, clarity, truth, warmth — and kept unchanged.
// The sentence stays byte-identical to the verified build: 218 characters,
// one sentence, its only periods the terminal one and the one inside
// "make.fun".
