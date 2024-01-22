import { parse, walk, SyntaxKind, safeHtml } from 'html5parser';

const ast = parse('<!DOCTYPE html><head><title>Hello html5parser!</title></head></html>');
const htmlInput = `
<div>
  <h1>H1</h1>
  <h2>H2</h2>
\t<script>Script</script>
\t<style>Style</style>
  <p class="class" style="padding: 0">
    <span>Span</span>
    <table>
      <tr><td>TD</td></tr>
    </table>
    <img data-hello="5" src="hello world" id="omit" />
  </p>
  <a href="/download.html" target="_blank" about="about">Download<span>child</span></a>
  <a href="javascript:" target="_blank" about="about">Javascript<span>child</span></a>
</div>
`;

const result = safeHtml(htmlInput, {
    allowedAttrs: ['id', 'data-hello']
})

console.log('result', result)
// walk(ast, {
//   enter: (node) => {
//     console.log(node.name)
//     if (node.type === SyntaxKind.Tag && node.name === 'title' && Array.isArray(node.body)) {
//       const text = node.body[0];
//       if (text.type !== SyntaxKind.Text) {
//         return;
//       }
//     //  console.log('@', text.value)
//     }
//   },
// });