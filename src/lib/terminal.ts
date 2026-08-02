// Layout
const width = 70;
const top = `┌${'─'.repeat(width)}┐`;
const divider = `├${'─'.repeat(width)}┤`;
const bottom = `└${'─'.repeat(width)}┘`;
const row = (text = '') => `│ ${text.padEnd(width - 1)}│`;

// Content
const title = 'timschneider.xyz';
const titleBar = row('o o o'.padEnd(Math.floor((width - title.length) / 2) - 1) + title);
const body = [
  '',
  '  Tim Schneider',
  '',
  "  I'm a developer, husband and father. When I get the chance,",
  '  I like to unwind by listening to music and playing video games.',
  '',
  '  Some links you may find interesting:',
  '',
  '    dotfiles  My configs and macOS setup.',
  '              https://github.com/timschneiderxyz/dotfiles',
  '',
  "    homelab   All the stuff I'm running at home.",
  '              https://github.com/timschneiderxyz/homelab',
  '',
  '  You can also find me on:',
  '',
  '    X         https://x.com/timschneiderxyz',
  '    GitHub    https://github.com/timschneiderxyz',
  ''
];

export const terminal = [
  '',
  top,
  titleBar,
  divider,
  ...body.map(line => row(line)),
  bottom,
  ''
].join('\n');
