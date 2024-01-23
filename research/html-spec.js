const htmlSpec = `

import inputHTML from './input-html.js'

<!DOCTYPE html>
<html class="split index" lang=en-US-x-hixie>
<script src=/link-fixup.js defer=""></script>
<meta charset=utf-8>
<meta content="width=device-width, initial-scale=1, shrink-to-fit=no" name=viewport>
<title>HTML Standard</title>
<meta content=#3c790a name=theme-color>
<meta content="light dark" name=color-scheme>
<link rel=stylesheet href=https://resources.whatwg.org/standard-shared-with-dev.css crossorigin="">
<link rel=stylesheet href=https://resources.whatwg.org/standard.css crossorigin="">
<link rel=stylesheet href=https://resources.whatwg.org/spec.css crossorigin="">
<link rel=icon href=https://resources.whatwg.org/logo.svg crossorigin="">
<link rel=stylesheet href=/styles.css crossorigin="">
<script>
        function toggleStatus(div) {
                div.parentNode.classList.toggle('wrapped');
        }
        function setLinkFragment(link) {
                link.hash = location.hash;
        }
</script>

<body>

        <script defer="" crossorigin="" src=/html-dfn.js></script>
        <script crossorigin="" defer="" src=https://resources.whatwg.org/commit-snapshot-shortcut-key.js></script>
        <header id=head class="head with-buttons">
                <a href=https://whatwg.org/ class=logo><img width=100 alt=WHATWG crossorigin=""
                                src=https://resources.whatwg.org/logo.svg height=100></a>
                <hgroup>
                        <h1 class=allcaps>HTML</h1>
                        <p id=living-standard>Living Standard — Last Updated <span class=pubdate>18 January 2024</span>
                </hgroup>

                <nav>

                        <div>

                                <a href= /><span><strong>One-Page Version</strong>
                                        <code>html.spec.whatwg.org</code></span></a>
                                <a onclick=setLinkFragment(this); id=multipage-link
                                        href=/multipage /><span><strong>Multipage Version</strong>
                                        <code>/multipage</code></span></a>
                                <a onclick=setLinkFragment(this); href=/dev /><span><strong>Version for Web
                                                Devs</strong> <code>/dev</code></span></a>
                                <a href=/print.pdf><span><strong>PDF Version</strong> <code>/print.pdf</code></span></a>
                                <a href=https://github.com/whatwg/html/wiki/Translations><span><strong>Translations</strong>
                                                <code>日本語 • 简体中文</code></span></a>
                        </div>
                        <div>
                                <a href=https://github.com/whatwg/html/blob/main/FAQ.md
                                        class=misc><span><strong>FAQ</strong> <code>on GitHub</code></span></a>
                                <a href=https://whatwg.org/chat class=comms><span><strong>Chat</strong>
                                                <code>on Matrix</code></span></a>
                        </div>
                        <div>
                                <a href=https://github.com/whatwg/html class=changes><span><strong>Contribute on
                                                        GitHub</strong> <code>whatwg/html repository</code></span></a>
                                <a href=https://github.com/whatwg/html/commits
                                        class=changes><span><strong>Commits</strong> <code>on GitHub</code></span></a>
                                <a id=commit-snapshot-link
                                        href=/commit-snapshots/6a9aef078050a9077e12274d48254deafdc3a6c2/
                                        class=changes><span><strong>Snapshot</strong>
                                                <code>as of this commit</code></span></a>
                                <a href=https://twitter.com/htmlstandard class=changes><span><strong>Twitter
                                                        Updates</strong> <code>@htmlstandard</code></span></a>
                        </div>
                        <div>
                                <a href=https://github.com/whatwg/html/issues class=feedback><span><strong>Open
                                                        Issues</strong> <code>filed on GitHub</code></span></a>
                                <a href=https://whatwg.org/newbug class=feedback><span><strong>Open an Issue</strong>
                                                <code>whatwg.org/newbug</code></span></a>
                                <a href=https://github.com/web-platform-tests/wpt/tree/master/html
                                        class=feedback><span><strong>Tests</strong>
                                                <code>web-platform-tests html/</code></span></a>
                                <a href=https://github.com/web-platform-tests/wpt/labels/html
                                        class=feedback><span><strong>Issues for Tests</strong>
                                                <code>ongoing work</code></span></a>
                        </div>
                </nav>


        </header>





        <hr>

        <h2 id=table-of-contents class="no-num no-toc">Table of contents</h2>
        <ol class="brief toc">
                <li><a href=#toc-introduction><span class=secno>1</span> Introduction</a>
                <li><a href=#toc-infrastructure><span class=secno>2</span> Common infrastructure</a>
                <li><a href=#toc-dom><span class=secno>3</span> Semantics, structure, and APIs of HTML documents</a>
                <li><a href=#toc-semantics><span class=secno>4</span> The elements of HTML</a>
                <li><a href=#toc-microdata><span class=secno>5</span> Microdata</a>
                <li><a href=#toc-editing><span class=secno>6</span> User interaction</a>
                <li><a href=#toc-browsers><span class=secno>7</span> Loading web pages</a>
                <li><a href=#toc-webappapis><span class=secno>8</span> Web application APIs</a>
                <li><a href=#toc-comms><span class=secno>9</span> Communication</a>
                <li><a href=#toc-workers><span class=secno>10</span> Web workers</a>
                <li><a href=#toc-worklets><span class=secno>11</span> Worklets</a>
                <li><a href=#toc-webstorage><span class=secno>12</span> Web storage</a>
                <li><a href=#toc-syntax><span class=secno>13</span> The HTML syntax</a>
                <li><a href=#toc-the-xhtml-syntax><span class=secno>14</span> The XML syntax</a>
                <li><a href=#toc-rendering><span class=secno>15</span> Rendering</a>
                <li><a href=#toc-obsolete><span class=secno>16</span> Obsolete features</a>
                <li><a href=#toc-iana><span class=secno>17</span> IANA considerations</a>
                <li><a href=#toc-index>Index</a>
                <li><a href=#toc-references>References</a>
                <li><a href=#toc-acknowledgments>Acknowledgments</a>
                <li><a href=#toc-ipr>Intellectual property rights</a>
        </ol>

        <h2 id=contents class="no-num no-toc">Full table of contents</h2>
        <ol class=toc>
                <li id=toc-introduction><a href=introduction.html#introduction><span class=secno>1</span>
                                Introduction</a>
                        <ol>
                                <li><a href=introduction.html#abstract><span class=secno>1.1</span> Where does this
                                                specification fit?</a>
                                <li><a href=introduction.html#is-this-html5?><span class=secno>1.2</span> Is this
                                                HTML5?</a>
                                <li><a href=introduction.html#background><span class=secno>1.3</span> Background</a>
                                <li><a href=introduction.html#audience><span class=secno>1.4</span> Audience</a>
                                <li><a href=introduction.html#scope><span class=secno>1.5</span> Scope</a>
                                <li><a href=introduction.html#history-2><span class=secno>1.6</span> History</a>
                                <li><a href=introduction.html#design-notes><span class=secno>1.7</span> Design notes</a>
                                        <ol>
                                                <li><a href=introduction.html#serialisability-of-script-execution><span
                                                                        class=secno>1.7.1</span> Serializability of
                                                                script execution</a>
                                                <li><a href=introduction.html#compliance-with-other-specifications><span
                                                                        class=secno>1.7.2</span> Compliance with other
                                                                specifications</a>
                                                <li><a href=introduction.html#extensibility><span
                                                                        class=secno>1.7.3</span> Extensibility</a>
                                        </ol>
                                <li><a href=introduction.html#html-vs-xhtml><span class=secno>1.8</span> HTML vs XML
                                                syntax</a>
                                <li><a href=introduction.html#structure-of-this-specification><span
                                                        class=secno>1.9</span> Structure of this specification</a>
                                        <ol>
                                                <li><a href=introduction.html#how-to-read-this-specification><span
                                                                        class=secno>1.9.1</span> How to read this
                                                                specification</a>
                                                <li><a href=introduction.html#typographic-conventions><span
                                                                        class=secno>1.9.2</span> Typographic
                                                                conventions</a>
                                        </ol>
                                <li><a href=introduction.html#a-quick-introduction-to-html><span class=secno>1.10</span>
                                                A quick introduction to HTML</a>
                                        <ol>
                                                <li><a href=introduction.html#writing-secure-applications-with-html><span
                                                                        class=secno>1.10.1</span> Writing secure
                                                                applications with HTML</a>
                                                <li><a href=introduction.html#common-pitfalls-to-avoid-when-using-the-scripting-apis><span
                                                                        class=secno>1.10.2</span> Common pitfalls to
                                                                avoid when using the scripting APIs</a>
                                                <li><a href=introduction.html#how-to-catch-mistakes-when-writing-html:-validators-and-conformance-checkers><span
                                                                        class=secno>1.10.3</span> How to catch mistakes
                                                                when writing HTML: validators and conformance
                                                                checkers</a>
                                        </ol>
                                <li><a href=introduction.html#conformance-requirements-for-authors><span
                                                        class=secno>1.11</span> Conformance requirements for authors</a>
                                        <ol>
                                                <li><a href=introduction.html#presentational-markup><span
                                                                        class=secno>1.11.1</span> Presentational
                                                                markup</a>
                                                <li><a href=introduction.html#syntax-errors><span
                                                                        class=secno>1.11.2</span> Syntax errors</a>
                                                <li><a href=introduction.html#restrictions-on-content-models-and-on-attribute-values><span
                                                                        class=secno>1.11.3</span> Restrictions on
                                                                content models and on attribute values</a>
                                        </ol>
                                <li><a href=introduction.html#suggested-reading><span class=secno>1.12</span> Suggested
                                                reading</a>
                        </ol>
                <li id=toc-infrastructure><a href=infrastructure.html#infrastructure><span class=secno>2</span> Common
                                infrastructure</a>
                        <ol>
                                <li><a href=infrastructure.html#terminology><span class=secno>2.1</span> Terminology</a>
                                        <ol>
                                                <li><a href=infrastructure.html#parallelism><span
                                                                        class=secno>2.1.1</span> Parallelism</a>
                                                <li><a href=infrastructure.html#resources><span class=secno>2.1.2</span>
                                                                Resources</a>
                                                <li><a href=infrastructure.html#xml><span class=secno>2.1.3</span> XML
                                                                compatibility</a>
                                                <li><a href=infrastructure.html#dom-trees><span class=secno>2.1.4</span>
                                                                DOM trees</a>
                                                <li><a href=infrastructure.html#scripting-2><span
                                                                        class=secno>2.1.5</span> Scripting</a>
                                                <li><a href=infrastructure.html#plugins><span class=secno>2.1.6</span>
                                                                Plugins</a>
                                                <li><a href=infrastructure.html#encoding-terminology><span
                                                                        class=secno>2.1.7</span> Character encodings</a>
                                                <li><a href=infrastructure.html#conformance-classes><span
                                                                        class=secno>2.1.8</span> Conformance classes</a>
                                                <li><a href=infrastructure.html#dependencies><span
                                                                        class=secno>2.1.9</span> Dependencies</a>
                                                <li><a href=infrastructure.html#extensibility-2><span
                                                                        class=secno>2.1.10</span> Extensibility</a>
                                                <li><a href=infrastructure.html#interactions-with-xpath-and-xslt><span
                                                                        class=secno>2.1.11</span> Interactions with
                                                                XPath and XSLT</a>
                                        </ol>
                                <li><a href=infrastructure.html#policy-controlled-features><span class=secno>2.2</span>
                                                Policy-controlled features</a>
                                <li><a href=common-microsyntaxes.html#common-microsyntaxes><span class=secno>2.3</span>
                                                Common microsyntaxes</a>
                                        <ol>
                                                <li><a href=common-microsyntaxes.html#common-parser-idioms><span
                                                                        class=secno>2.3.1</span> Common parser
                                                                idioms</a>
                                                <li><a href=common-microsyntaxes.html#boolean-attributes><span
                                                                        class=secno>2.3.2</span> Boolean attributes</a>
                                                <li><a href=common-microsyntaxes.html#keywords-and-enumerated-attributes><span
                                                                        class=secno>2.3.3</span> Keywords and enumerated
                                                                attributes</a>
                                                <li><a href=common-microsyntaxes.html#numbers><span
                                                                        class=secno>2.3.4</span> Numbers</a>
                                                        <ol>
                                                                <li><a href=common-microsyntaxes.html#signed-integers><span
                                                                                        class=secno>2.3.4.1</span>
                                                                                Signed integers</a>
                                                                <li><a href=common-microsyntaxes.html#non-negative-integers><span
                                                                                        class=secno>2.3.4.2</span>
                                                                                Non-negative integers</a>
                                                                <li><a href=common-microsyntaxes.html#floating-point-numbers><span
                                                                                        class=secno>2.3.4.3</span>
                                                                                Floating-point numbers</a>
                                                                <li><a href=common-microsyntaxes.html#percentages-and-dimensions><span
                                                                                        class=secno>2.3.4.4</span>
                                                                                Percentages and lengths</a>
                                                                <li><a href=common-microsyntaxes.html#nonzero-percentages-and-lengths><span
                                                                                        class=secno>2.3.4.5</span>
                                                                                Nonzero percentages and lengths</a>
                                                                <li><a href=common-microsyntaxes.html#lists-of-floating-point-numbers><span
                                                                                        class=secno>2.3.4.6</span> Lists
                                                                                of floating-point numbers</a>
                                                                <li><a href=common-microsyntaxes.html#lists-of-dimensions><span
                                                                                        class=secno>2.3.4.7</span> Lists
                                                                                of dimensions</a>
                                                        </ol>
                                                <li><a href=common-microsyntaxes.html#dates-and-times><span
                                                                        class=secno>2.3.5</span> Dates and times</a>
                                                        <ol>
                                                                <li><a href=common-microsyntaxes.html#months><span
                                                                                        class=secno>2.3.5.1</span>
                                                                                Months</a>
                                                                <li><a href=common-microsyntaxes.html#dates><span
                                                                                        class=secno>2.3.5.2</span>
                                                                                Dates</a>
                                                                <li><a href=common-microsyntaxes.html#yearless-dates><span
                                                                                        class=secno>2.3.5.3</span>
                                                                                Yearless dates</a>
                                                                <li><a href=common-microsyntaxes.html#times><span
                                                                                        class=secno>2.3.5.4</span>
                                                                                Times</a>
                                                                <li><a href=common-microsyntaxes.html#local-dates-and-times><span
                                                                                        class=secno>2.3.5.5</span> Local
                                                                                dates and times</a>
                                                                <li><a href=common-microsyntaxes.html#time-zones><span
                                                                                        class=secno>2.3.5.6</span> Time
                                                                                zones</a>
                                                                <li><a href=common-microsyntaxes.html#global-dates-and-times><span
                                                                                        class=secno>2.3.5.7</span>
                                                                                Global dates and times</a>
                                                                <li><a href=common-microsyntaxes.html#weeks><span
                                                                                        class=secno>2.3.5.8</span>
                                                                                Weeks</a>
                                                                <li><a href=common-microsyntaxes.html#durations><span
                                                                                        class=secno>2.3.5.9</span>
                                                                                Durations</a>
                                                                <li><a href=common-microsyntaxes.html#vaguer-moments-in-time><span
                                                                                        class=secno>2.3.5.10</span>
                                                                                Vaguer moments in time</a>
                                                        </ol>
                                                <li><a href=common-microsyntaxes.html#colours><span
                                                                        class=secno>2.3.6</span> Colors</a>
                                                <li><a href=common-microsyntaxes.html#space-separated-tokens><span
                                                                        class=secno>2.3.7</span> Space-separated
                                                                tokens</a>
                                                <li><a href=common-microsyntaxes.html#comma-separated-tokens><span
                                                                        class=secno>2.3.8</span> Comma-separated
                                                                tokens</a>
                                                <li><a href=common-microsyntaxes.html#syntax-references><span
                                                                        class=secno>2.3.9</span> References</a>
                                                <li><a href=common-microsyntaxes.html#mq><span class=secno>2.3.10</span>
                                                                Media queries</a>
                                                <li><a href=common-microsyntaxes.html#unique-values><span
                                                                        class=secno>2.3.11</span> Unique internal
                                                                values</a>
                                        </ol>
                                <li><a href=urls-and-fetching.html#urls><span class=secno>2.4</span> URLs</a>
                                        <ol>
                                                <li><a href=urls-and-fetching.html#terminology-2><span
                                                                        class=secno>2.4.1</span> Terminology</a>
                                                <li><a href=urls-and-fetching.html#resolving-urls><span
                                                                        class=secno>2.4.2</span> Parsing URLs</a>
                                                <li><a href=urls-and-fetching.html#dynamic-changes-to-base-urls><span
                                                                        class=secno>2.4.3</span> Dynamic changes to base
                                                                URLs</a>
                                        </ol>
                                <li><a href=urls-and-fetching.html#fetching-resources><span class=secno>2.5</span>
                                                Fetching resources</a>
                                        <ol>
                                                <li><a href=urls-and-fetching.html#terminology-3><span
                                                                        class=secno>2.5.1</span> Terminology</a>
                                                <li><a href=urls-and-fetching.html#content-type-sniffing><span
                                                                        class=secno>2.5.2</span> Determining the type of
                                                                a resource</a>
                                                <li><a href=urls-and-fetching.html#extracting-character-encodings-from-meta-elements><span
                                                                        class=secno>2.5.3</span> Extracting character
                                                                encodings from <code>meta</code> elements</a>
                                                <li><a href=urls-and-fetching.html#cors-settings-attributes><span
                                                                        class=secno>2.5.4</span> CORS settings
                                                                attributes</a>
                                                <li><a href=urls-and-fetching.html#referrer-policy-attributes><span
                                                                        class=secno>2.5.5</span> Referrer policy
                                                                attributes</a>
                                                <li><a href=urls-and-fetching.html#nonce-attributes><span
                                                                        class=secno>2.5.6</span> Nonce attributes</a>
                                                <li><a href=urls-and-fetching.html#lazy-loading-attributes><span
                                                                        class=secno>2.5.7</span> Lazy loading
                                                                attributes</a>
                                                <li><a href=urls-and-fetching.html#blocking-attributes><span
                                                                        class=secno>2.5.8</span> Blocking attributes</a>
                                                <li><a href=urls-and-fetching.html#fetch-priority-attributes><span
                                                                        class=secno>2.5.9</span> Fetch priority
                                                                attributes</a>
                                        </ol>
                                <li><a href=common-dom-interfaces.html#common-dom-interfaces><span
                                                        class=secno>2.6</span> Common DOM interfaces</a>
                                        <ol>
                                                <li><a href=common-dom-interfaces.html#reflecting-content-attributes-in-idl-attributes><span
                                                                        class=secno>2.6.1</span> Reflecting content
                                                                attributes in IDL attributes</a>
                                                <li><a href=common-dom-interfaces.html#using-reflect-in-specifications><span
                                                                        class=secno>2.6.2</span> Using reflect in
                                                                specifications</a>
                                                <li><a href=common-dom-interfaces.html#collections><span
                                                                        class=secno>2.6.3</span> Collections</a>
                                                        <ol>
                                                                <li><a href=common-dom-interfaces.html#the-htmlallcollection-interface><span
                                                                                        class=secno>2.6.3.1</span> The
                                                                                <code>HTMLAllCollection</code>
                                                                                interface</a>
                                                                        <ol>
                                                                                <li><a href=common-dom-interfaces.html#HTMLAllCollection-call><span
                                                                                                        class=secno>2.6.3.1.1</span>
                                                                                                [[Call]] (
                                                                                                <var>thisArgument</var>,
                                                                                                <var>argumentsList</var>
                                                                                                )</a>
                                                                        </ol>
                                                                <li><a href=common-dom-interfaces.html#the-htmlformcontrolscollection-interface><span
                                                                                        class=secno>2.6.3.2</span> The
                                                                                <code>HTMLFormControlsCollection</code>
                                                                                interface</a>
                                                                <li><a href=common-dom-interfaces.html#the-htmloptionscollection-interface><span
                                                                                        class=secno>2.6.3.3</span> The
                                                                                <code>HTMLOptionsCollection</code>
                                                                                interface</a>
                                                        </ol>
                                                <li><a href=common-dom-interfaces.html#the-domstringlist-interface><span
                                                                        class=secno>2.6.4</span> The
                                                                <code>DOMStringList</code> interface</a>
                                        </ol>
                                <li><a href=structured-data.html#safe-passing-of-structured-data><span
                                                        class=secno>2.7</span> Safe passing of structured data</a>
                                        <ol>
                                                <li><a href=structured-data.html#serializable-objects><span
                                                                        class=secno>2.7.1</span> Serializable
                                                                objects</a>
                                                <li><a href=structured-data.html#transferable-objects><span
                                                                        class=secno>2.7.2</span> Transferable
                                                                objects</a>
                                                <li><a href=structured-data.html#structuredserializeinternal><span
                                                                        class=secno>2.7.3</span>
                                                                StructuredSerializeInternal ( <var>value</var>,
                                                                <var>forStorage</var> [ ,
                                                                <var>memory</var> ] )</a>
                                                <li><a href=structured-data.html#structuredserialize><span
                                                                        class=secno>2.7.4</span> StructuredSerialize (
                                                                <var>value</var> )</a>
                                                <li><a href=structured-data.html#structuredserializeforstorage><span
                                                                        class=secno>2.7.5</span>
                                                                StructuredSerializeForStorage ( <var>value</var> )</a>
                                                <li><a href=structured-data.html#structureddeserialize><span
                                                                        class=secno>2.7.6</span> StructuredDeserialize (
                                                                <var>serialized</var>, <var>targetRealm</var> [ ,
                                                                <var>memory</var> ] )</a>
                                                <li><a href=structured-data.html#structuredserializewithtransfer><span
                                                                        class=secno>2.7.7</span>
                                                                StructuredSerializeWithTransfer ( <var>value</var>,
                                                                <var>transferList</var>
                                                                )</a>
                                                <li><a href=structured-data.html#structureddeserializewithtransfer><span
                                                                        class=secno>2.7.8</span>
                                                                StructuredDeserializeWithTransfer (
                                                                <var>serializeWithTransferResult</var>,
                                                                <var>targetRealm</var> )</a>
                                                <li><a href=structured-data.html#performing-structured-clones-from-other-specifications><span
                                                                        class=secno>2.7.9</span> Performing
                                                                serialization and
                                                                transferring from other specifications</a>
                                                <li><a href=structured-data.html#structured-cloning><span
                                                                        class=secno>2.7.10</span> Structured cloning
                                                                API</a>
                                        </ol>
                        </ol>
                <li id=toc-dom><a href=dom.html#dom><span class=secno>3</span> Semantics, structure, and APIs of HTML
                                documents</a>
                        <ol>
                                <li><a href=dom.html#documents><span class=secno>3.1</span> Documents</a>
                                        <ol>
                                                <li><a href=dom.html#the-document-object><span class=secno>3.1.1</span>
                                                                The <code>Document</code> object</a>
                                                <li><a href=dom.html#the-documentorshadowroot-interface><span
                                                                        class=secno>3.1.2</span> The
                                                                <code>DocumentOrShadowRoot</code> interface</a>
                                                <li><a href=dom.html#resource-metadata-management><span
                                                                        class=secno>3.1.3</span> Resource metadata
                                                                management</a>
                                                <li><a href=dom.html#reporting-document-loading-status><span
                                                                        class=secno>3.1.4</span> Reporting document
                                                                loading status</a>
                                                <li><a href=dom.html#render-blocking-mechanism><span
                                                                        class=secno>3.1.5</span> Render-blocking
                                                                mechanism</a>
                                                <li><a href=dom.html#dom-tree-accessors><span class=secno>3.1.6</span>
                                                                DOM tree accessors</a>
                                        </ol>
                                <li><a href=dom.html#elements><span class=secno>3.2</span> Elements</a>
                                        <ol>
                                                <li><a href=dom.html#semantics-2><span class=secno>3.2.1</span>
                                                                Semantics</a>
                                                <li><a href=dom.html#elements-in-the-dom><span class=secno>3.2.2</span>
                                                                Elements in the DOM</a>
                                                <li><a href=dom.html#html-element-constructors><span
                                                                        class=secno>3.2.3</span> HTML element
                                                                constructors</a>
                                                <li><a href=dom.html#element-definitions><span class=secno>3.2.4</span>
                                                                Element definitions</a>
                                                        <ol>
                                                                <li><a href=dom.html#attributes><span
                                                                                        class=secno>3.2.4.1</span>
                                                                                Attributes</a>
                                                        </ol>
                                                <li><a href=dom.html#content-models><span class=secno>3.2.5</span>
                                                                Content models</a>
                                                        <ol>
                                                                <li><a href=dom.html#the-nothing-content-model><span
                                                                                        class=secno>3.2.5.1</span> The
                                                                                "nothing" content model</a>
                                                                <li><a href=dom.html#kinds-of-content><span
                                                                                        class=secno>3.2.5.2</span> Kinds
                                                                                of content</a>
                                                                        <ol>
                                                                                <li><a href=dom.html#metadata-content><span
                                                                                                        class=secno>3.2.5.2.1</span>
                                                                                                Metadata content</a>
                                                                                <li><a href=dom.html#flow-content><span
                                                                                                        class=secno>3.2.5.2.2</span>
                                                                                                Flow content</a>
                                                                                <li><a href=dom.html#sectioning-content><span
                                                                                                        class=secno>3.2.5.2.3</span>
                                                                                                Sectioning content</a>
                                                                                <li><a href=dom.html#heading-content><span
                                                                                                        class=secno>3.2.5.2.4</span>
                                                                                                Heading content</a>
                                                                                <li><a href=dom.html#phrasing-content><span
                                                                                                        class=secno>3.2.5.2.5</span>
                                                                                                Phrasing content</a>
                                                                                <li><a href=dom.html#embedded-content-2><span
                                                                                                        class=secno>3.2.5.2.6</span>
                                                                                                Embedded content</a>
                                                                                <li><a href=dom.html#interactive-content><span
                                                                                                        class=secno>3.2.5.2.7</span>
                                                                                                Interactive content</a>
                                                                                <li><a href=dom.html#palpable-content><span
                                                                                                        class=secno>3.2.5.2.8</span>
                                                                                                Palpable content</a>
                                                                                <li><a href=dom.html#script-supporting-elements><span
                                                                                                        class=secno>3.2.5.2.9</span>
                                                                                                Script-supporting
                                                                                                elements</a>
                                                                        </ol>
                                                                <li><a href=dom.html#transparent-content-models><span
                                                                                        class=secno>3.2.5.3</span>
                                                                                Transparent content models</a>
                                                                <li><a href=dom.html#paragraphs><span
                                                                                        class=secno>3.2.5.4</span>
                                                                                Paragraphs</a>
                                                        </ol>
                                                <li><a href=dom.html#global-attributes><span class=secno>3.2.6</span>
                                                                Global attributes</a>
                                                        <ol>
                                                                <li><a href=dom.html#the-title-attribute><span
                                                                                        class=secno>3.2.6.1</span> The
                                                                                <code>title</code> attribute</a>
                                                                <li><a href=dom.html#the-lang-and-xml:lang-attributes><span
                                                                                        class=secno>3.2.6.2</span> The
                                                                                <code>lang</code> and
                                                                                <code>xml:lang</code>
                                                                                attributes</a>
                                                                <li><a href=dom.html#the-translate-attribute><span
                                                                                        class=secno>3.2.6.3</span> The
                                                                                <code>translate</code> attribute</a>
                                                                <li><a href=dom.html#the-dir-attribute><span
                                                                                        class=secno>3.2.6.4</span> The
                                                                                <code>dir</code> attribute</a>
                                                                <li><a href=dom.html#the-style-attribute><span
                                                                                        class=secno>3.2.6.5</span> The
                                                                                <code>style</code> attribute</a>
                                                                <li><a href=dom.html#embedding-custom-non-visible-data-with-the-data-*-attributes><span
                                                                                        class=secno>3.2.6.6</span>
                                                                                Embedding custom non-visible data with
                                                                                the <code>data-*</code> attributes</a>
                                                        </ol>
                                                <li><a href=dom.html#the-innertext-idl-attribute><span
                                                                        class=secno>3.2.7</span> The
                                                                <code>innerText</code> and <code>outerText</code>
                                                                properties</a>
                                                <li><a href=dom.html#requirements-relating-to-the-bidirectional-algorithm><span
                                                                        class=secno>3.2.8</span> Requirements relating
                                                                to the bidirectional algorithm</a>
                                                        <ol>
                                                                <li><a href=dom.html#authoring-conformance-criteria-for-bidirectional-algorithm-formatting-characters><span
                                                                                        class=secno>3.2.8.1</span>
                                                                                Authoring conformance criteria for
                                                                                bidirectional-algorithm formatting
                                                                                characters</a>
                                                                <li><a href=dom.html#user-agent-conformance-criteria><span
                                                                                        class=secno>3.2.8.2</span> User
                                                                                agent conformance criteria</a>
                                                        </ol>
                                                <li><a href=dom.html#wai-aria><span class=secno>3.2.9</span>
                                                                Requirements related to ARIA and to platform
                                                                accessibility APIs</a>
                                        </ol>
                        </ol>
                <li id=toc-semantics><a href=semantics.html#semantics><span class=secno>4</span> The elements of
                                HTML</a>
                        <ol>
                                <li><a href=semantics.html#the-root-element><span class=secno>4.1</span> The document
                                                element</a>
                                        <ol>
                                                <li><a href=semantics.html#the-html-element><span
                                                                        class=secno>4.1.1</span> The <code>html</code>
                                                                element</a>
                                        </ol>
                                <li><a href=semantics.html#document-metadata><span class=secno>4.2</span> Document
                                                metadata</a>
                                        <ol>
                                                <li><a href=semantics.html#the-head-element><span
                                                                        class=secno>4.2.1</span> The <code>head</code>
                                                                element</a>
                                                <li><a href=semantics.html#the-title-element><span
                                                                        class=secno>4.2.2</span> The <code>title</code>
                                                                element</a>
                                                <li><a href=semantics.html#the-base-element><span
                                                                        class=secno>4.2.3</span> The <code>base</code>
                                                                element</a>
                                                <li><a href=semantics.html#the-link-element><span
                                                                        class=secno>4.2.4</span> The <code>link</code>
                                                                element</a>
                                                        <ol>
                                                                <li><a href=semantics.html#processing-the-media-attribute><span
                                                                                        class=secno>4.2.4.1</span>
                                                                                Processing the <code>media</code>
                                                                                attribute</a>
                                                                <li><a href=semantics.html#processing-the-type-attribute><span
                                                                                        class=secno>4.2.4.2</span>
                                                                                Processing the <code>type</code>
                                                                                attribute</a>
                                                                <li><a href=semantics.html#fetching-and-processing-a-resource-from-a-link-element><span
                                                                                        class=secno>4.2.4.3</span>
                                                                                Fetching and processing a resource
                                                                                from a <code>link</code> element</a>
                                                                <li><a href=semantics.html#processing-link-headers><span
                                                                                        class=secno>4.2.4.4</span>
                                                                                Processing 
                                                                                headers</a>
                                                                <li><a href=semantics.html#early-hints><span
                                                                                        class=secno>4.2.4.5</span> Early
                                                                                hints</a>
                                                                <li><a href=semantics.html#providing-users-with-a-means-to-follow-hyperlinks-created-using-the-link-element><span
                                                                                        class=secno>4.2.4.6</span>
                                                                                Providing users with a means to follow
                                                                                hyperlinks created using the
                                                                                <code>link</code>
                                                                                element</a>
                                                        </ol>
                                                <li><a href=semantics.html#the-meta-element><span
                                                                        class=secno>4.2.5</span> The <code>meta</code>
                                                                element</a>
                                                        <ol>
                                                                <li><a href=semantics.html#standard-metadata-names><span
                                                                                        class=secno>4.2.5.1</span>
                                                                                Standard metadata names</a>
                                                                <li><a href=semantics.html#other-metadata-names><span
                                                                                        class=secno>4.2.5.2</span> Other
                                                                                metadata names</a>
                                                                <li><a href=semantics.html#pragma-directives><span
                                                                                        class=secno>4.2.5.3</span>
                                                                                Pragma directives</a>
                                                                <li><a href=semantics.html#charset><span
                                                                                        class=secno>4.2.5.4</span>
                                                                                Specifying the document's character
                                                                                encoding</a>
                                                        </ol>
                                                <li><a href=semantics.html#the-style-element><span
                                                                        class=secno>4.2.6</span> The <code>style</code>
                                                                element</a>
                                                <li><a href=semantics.html#interactions-of-styling-and-scripting><span
                                                                        class=secno>4.2.7</span> Interactions of styling
                                                                and scripting</a>
                                        </ol>
                                <li><a href=sections.html#sections><span class=secno>4.3</span> Sections</a>
                                        <ol>
                                                <li><a href=sections.html#the-body-element><span
                                                                        class=secno>4.3.1</span> The <code>body</code>
                                                                element</a>
                                                <li><a href=sections.html#the-article-element><span
                                                                        class=secno>4.3.2</span> The
                                                                <code>article</code> element</a>
                                                <li><a href=sections.html#the-section-element><span
                                                                        class=secno>4.3.3</span> The
                                                                <code>section</code> element</a>
                                                <li><a href=sections.html#the-nav-element><span class=secno>4.3.4</span>
                                                                The <code>nav</code> element</a>
                                                <li><a href=sections.html#the-aside-element><span
                                                                        class=secno>4.3.5</span> The <code>aside</code>
                                                                element</a>
                                                <li><a href=sections.html#the-h1,-h2,-h3,-h4,-h5,-and-h6-elements><span
                                                                        class=secno>4.3.6</span> The <code>h1</code>,
                                                                <code>h2</code>, <code>h3</code>, <code>h4</code>,
                                                                <code>h5</code>, and <code>h6</code>
                                                                elements</a>
                                                <li><a href=sections.html#the-hgroup-element><span
                                                                        class=secno>4.3.7</span> The <code>hgroup</code>
                                                                element</a>
                                                <li><a href=sections.html#the-header-element><span
                                                                        class=secno>4.3.8</span> The <code>header</code>
                                                                element</a>
                                                <li><a href=sections.html#the-footer-element><span
                                                                        class=secno>4.3.9</span> The <code>footer</code>
                                                                element</a>
                                                <li><a href=sections.html#the-address-element><span
                                                                        class=secno>4.3.10</span> The
                                                                <code>address</code> element</a>
                                                <li><a href=sections.html#headings-and-outlines-2><span
                                                                        class=secno>4.3.11</span> Headings and
                                                                outlines</a>
                                                        <ol>
                                                                <li><a href=sections.html#sample-outlines><span
                                                                                        class=secno>4.3.11.1</span>
                                                                                Sample outlines</a>
                                                                <li><a href=sections.html#exposing-outlines-to-users><span
                                                                                        class=secno>4.3.11.2</span>
                                                                                Exposing outlines to users</a>
                                                        </ol>
                                                <li><a href=sections.html#usage-summary-2><span
                                                                        class=secno>4.3.12</span> Usage summary</a>
                                                        <ol>
                                                                <li><a href=sections.html#article-or-section><span
                                                                                        class=secno>4.3.12.1</span>
                                                                                Article or section?</a>
                                                        </ol>
                                        </ol>
                                <li><a href=grouping-content.html#grouping-content><span class=secno>4.4</span> Grouping
                                                content</a>
                                        <ol>
                                                <li><a href=grouping-content.html#the-p-element><span
                                                                        class=secno>4.4.1</span> The <code>p</code>
                                                                element</a>
                                                <li><a href=grouping-content.html#the-hr-element><span
                                                                        class=secno>4.4.2</span> The <code>hr</code>
                                                                element</a>
                                                <li><a href=grouping-content.html#the-pre-element><span
                                                                        class=secno>4.4.3</span> The <code>pre</code>
                                                                element</a>
                                                <li><a href=grouping-content.html#the-blockquote-element><span
                                                                        class=secno>4.4.4</span> The
                                                                <code>blockquote</code> element</a>
                                                <li><a href=grouping-content.html#the-ol-element><span
                                                                        class=secno>4.4.5</span> The <code>ol</code>
                                                                element</a>
                                                <li><a href=grouping-content.html#the-ul-element><span
                                                                        class=secno>4.4.6</span> The <code>ul</code>
                                                                element</a>
                                                <li><a href=grouping-content.html#the-menu-element><span
                                                                        class=secno>4.4.7</span> The <code>menu</code>
                                                                element</a>
                                                <li><a href=grouping-content.html#the-li-element><span
                                                                        class=secno>4.4.8</span> The <code>li</code>
                                                                element</a>
                                                <li><a href=grouping-content.html#the-dl-element><span
                                                                        class=secno>4.4.9</span> The <code>dl</code>
                                                                element</a>
                                                <li><a href=grouping-content.html#the-dt-element><span
                                                                        class=secno>4.4.10</span> The <code>dt</code>
                                                                element</a>
                                                <li><a href=grouping-content.html#the-dd-element><span
                                                                        class=secno>4.4.11</span> The <code>dd</code>
                                                                element</a>
                                                <li><a href=grouping-content.html#the-figure-element><span
                                                                        class=secno>4.4.12</span> The
                                                                <code>figure</code> element</a>
                                                <li><a href=grouping-content.html#the-figcaption-element><span
                                                                        class=secno>4.4.13</span> The
                                                                <code>figcaption</code> element</a>
                                                <li><a href=grouping-content.html#the-main-element><span
                                                                        class=secno>4.4.14</span> The <code>main</code>
                                                                element</a>
                                                <li><a href=grouping-content.html#the-search-element><span
                                                                        class=secno>4.4.15</span> The
                                                                <code>search</code> element</a>
                                                <li><a href=grouping-content.html#the-div-element><span
                                                                        class=secno>4.4.16</span> The <code>div</code>
                                                                element</a>
                                        </ol>
                                <li><a href=text-level-semantics.html#text-level-semantics><span class=secno>4.5</span>
                                                Text-level semantics</a>
                                        <ol>
                                                <li><a href=text-level-semantics.html#the-a-element><span
                                                                        class=secno>4.5.1</span> The <code>a</code>
                                                                element</a>
                                                <li><a href=text-level-semantics.html#the-em-element><span
                                                                        class=secno>4.5.2</span> The <code>em</code>
                                                                element</a>
                                                <li><a href=text-level-semantics.html#the-strong-element><span
                                                                        class=secno>4.5.3</span> The <code>strong</code>
                                                                element</a>
                                                <li><a href=text-level-semantics.html#the-small-element><span
                                                                        class=secno>4.5.4</span> The <code>small</code>
                                                                element</a>
                                                <li><a href=text-level-semantics.html#the-s-element><span
                                                                        class=secno>4.5.5</span> The <code>s</code>
                                                                element</a>
                                                <li><a href=text-level-semantics.html#the-cite-element><span
                                                                        class=secno>4.5.6</span> The <code>cite</code>
                                                                element</a>
                                                <li><a href=text-level-semantics.html#the-q-element><span
                                                                        class=secno>4.5.7</span> The <code>q</code>
                                                                element</a>
                                                <li><a href=text-level-semantics.html#the-dfn-element><span
                                                                        class=secno>4.5.8</span> The <code>dfn</code>
                                                                element</a>
                                                <li><a href=text-level-semantics.html#the-abbr-element><span
                                                                        class=secno>4.5.9</span> The <code>abbr</code>
                                                                element</a>
                                                <li><a href=text-level-semantics.html#the-ruby-element><span
                                                                        class=secno>4.5.10</span> The <code>ruby</code>
                                                                element</a>
                                                <li><a href=text-level-semantics.html#the-rt-element><span
                                                                        class=secno>4.5.11</span> The <code>rt</code>
                                                                element</a>
                                                <li><a href=text-level-semantics.html#the-rp-element><span
                                                                        class=secno>4.5.12</span> The <code>rp</code>
                                                                element</a>
                                                <li><a href=text-level-semantics.html#the-data-element><span
                                                                        class=secno>4.5.13</span> The <code>data</code>
                                                                element</a>
                                                <li><a href=text-level-semantics.html#the-time-element><span
                                                                        class=secno>4.5.14</span> The <code>time</code>
                                                                element</a>
                                                <li><a href=text-level-semantics.html#the-code-element><span
                                                                        class=secno>4.5.15</span> The <code>code</code>
                                                                element</a>
                                                <li><a href=text-level-semantics.html#the-var-element><span
                                                                        class=secno>4.5.16</span> The <code>var</code>
                                                                element</a>
                                                <li><a href=text-level-semantics.html#the-samp-element><span
                                                                        class=secno>4.5.17</span> The <code>samp</code>
                                                                element</a>
                                                <li><a href=text-level-semantics.html#the-kbd-element><span
                                                                        class=secno>4.5.18</span> The <code>kbd</code>
                                                                element</a>
                                                <li><a href=text-level-semantics.html#the-sub-and-sup-elements><span
                                                                        class=secno>4.5.19</span> The <code>sub</code>
                                                                and <code>sup</code> elements</a>
                                                <li><a href=text-level-semantics.html#the-i-element><span
                                                                        class=secno>4.5.20</span> The <code>i</code>
                                                                element</a>
                                                <li><a href=text-level-semantics.html#the-b-element><span
                                                                        class=secno>4.5.21</span> The <code>b</code>
                                                                element</a>
                                                <li><a href=text-level-semantics.html#the-u-element><span
                                                                        class=secno>4.5.22</span> The <code>u</code>
                                                                element</a>
                                                <li><a href=text-level-semantics.html#the-mark-element><span
                                                                        class=secno>4.5.23</span> The <code>mark</code>
                                                                element</a>
                                                <li><a href=text-level-semantics.html#the-bdi-element><span
                                                                        class=secno>4.5.24</span> The <code>bdi</code>
                                                                element</a>
                                                <li><a href=text-level-semantics.html#the-bdo-element><span
                                                                        class=secno>4.5.25</span> The <code>bdo</code>
                                                                element</a>
                                                <li><a href=text-level-semantics.html#the-span-element><span
                                                                        class=secno>4.5.26</span> The <code>span</code>
                                                                element</a>
                                                <li><a href=text-level-semantics.html#the-br-element><span
                                                                        class=secno>4.5.27</span> The <code>br</code>
                                                                element</a>
                                                <li><a href=text-level-semantics.html#the-wbr-element><span
                                                                        class=secno>4.5.28</span> The <code>wbr</code>
                                                                element</a>
                                                <li><a href=text-level-semantics.html#usage-summary><span
                                                                        class=secno>4.5.29</span> Usage summary</a>
                                        </ol>
                                <li><a href=links.html#links><span class=secno>4.6</span> Links</a>
                                        <ol>
                                                <li><a href=links.html#introduction-2><span class=secno>4.6.1</span>
                                                                Introduction</a>
                                                <li><a href=links.html#links-created-by-a-and-area-elements><span
                                                                        class=secno>4.6.2</span> Links created by
                                                                <code>a</code> and <code>area</code> elements</a>
                                                <li><a href=links.html#api-for-a-and-area-elements><span
                                                                        class=secno>4.6.3</span> API for <code>a</code>
                                                                and <code>area</code> elements</a>
                                                <li><a href=links.html#following-hyperlinks><span
                                                                        class=secno>4.6.4</span> Following
                                                                hyperlinks</a>
                                                <li><a href=links.html#downloading-resources><span
                                                                        class=secno>4.6.5</span> Downloading
                                                                resources</a>
                                                <li><a href=links.html#hyperlink-auditing><span class=secno>4.6.6</span>
                                                                Hyperlink auditing</a>
                                                        <ol>
                                                                <li><a href=links.html#the-ping-headers><span
                                                                                        class=secno>4.6.6.1</span> The
                                                                    
                                                        </ol>
                                                <li><a href=links.html#linkTypes><span class=secno>4.6.7</span> Link
                                                                types</a>
                                                        <ol>
                                                                <li><a href=links.html#rel-alternate><span
                                                                                        class=secno>4.6.7.1</span> Link
                                                                                type "<code>alternate</code>"</a>
                                                                <li><a href=links.html#link-type-author><span
                                                                                        class=secno>4.6.7.2</span> Link
                                                                                type "<code>author</code>"</a>
                                                                <li><a href=links.html#link-type-bookmark><span
                                                                                        class=secno>4.6.7.3</span> Link
                                                                                type "<code>bookmark</code>"</a>
                                                                <li><a href=links.html#link-type-canonical><span
                                                                                        class=secno>4.6.7.4</span> Link
                                                                                type "<code>canonical</code>"</a>
                                                                <li><a href=links.html#link-type-dns-prefetch><span
                                                                                        class=secno>4.6.7.5</span> Link
                                                                                type "<code>dns-prefetch</code>"</a>
                                                                <li><a href=links.html#link-type-external><span
                                                                                        class=secno>4.6.7.6</span> Link
                                                                                type "<code>external</code>"</a>
                                                                <li><a href=links.html#link-type-help><span
                                                                                        class=secno>4.6.7.7</span> Link
                                                                                type "<code>help</code>"</a>
                                                                <li><a href=links.html#rel-icon><span
                                                                                        class=secno>4.6.7.8</span> Link
                                                                                type "<code>icon</code>"</a>
                                                                <li><a href=links.html#link-type-license><span
                                                                                        class=secno>4.6.7.9</span> Link
                                                                                type "<code>license</code>"</a>
                                                                <li><a href=links.html#link-type-manifest><span
                                                                                        class=secno>4.6.7.10</span> Link
                                                                                type "<code>manifest</code>"</a>
                                                                <li><a href=links.html#link-type-modulepreload><span
                                                                                        class=secno>4.6.7.11</span> Link
                                                                                type "<code>modulepreload</code>"</a>
                                                                <li><a href=links.html#link-type-nofollow><span
                                                                                        class=secno>4.6.7.12</span> Link
                                                                                type "<code>nofollow</code>"</a>
                                                                <li><a href=links.html#link-type-noopener><span
                                                                                        class=secno>4.6.7.13</span> Link
                                                                                type "<code>noopener</code>"</a>
                                                                <li><a href=links.html#link-type-noreferrer><span
                                                                                        class=secno>4.6.7.14</span> Link
                                                                                type "<code>noreferrer</code>"</a>
                                                                <li><a href=links.html#link-type-opener><span
                                                                                        class=secno>4.6.7.15</span> Link
                                                                                type "<code>opener</code>"</a>
                                                                <li><a href=links.html#link-type-pingback><span
                                                                                        class=secno>4.6.7.16</span> Link
                                                                                type "<code>pingback</code>"</a>
                                                                <li><a href=links.html#link-type-preconnect><span
                                                                                        class=secno>4.6.7.17</span> Link
                                                                                type "<code>preconnect</code>"</a>
                                                                <li><a href=links.html#link-type-prefetch><span
                                                                                        class=secno>4.6.7.18</span> Link
                                                                                type "<code>prefetch</code>"</a>
                                                                <li><a href=links.html#link-type-preload><span
                                                                                        class=secno>4.6.7.19</span> Link
                                                                                type "<code>preload</code>"</a>
                                                                <li><a href=links.html#link-type-privacy-policy><span
                                                                                        class=secno>4.6.7.20</span> Link
                                                                                type "<code>privacy-policy</code>"</a>
                                                                <li><a href=links.html#link-type-search><span
                                                                                        class=secno>4.6.7.21</span> Link
                                                                                type "<code>search</code>"</a>
                                                                <li><a href=links.html#link-type-stylesheet><span
                                                                                        class=secno>4.6.7.22</span> Link
                                                                                type "<code>stylesheet</code>"</a>
                                                                <li><a href=links.html#link-type-tag><span
                                                                                        class=secno>4.6.7.23</span> Link
                                                                                type "<code>tag</code>"</a>
                                                                <li><a href=links.html#link-type-terms-of-service><span
                                                                                        class=secno>4.6.7.24</span> Link
                                                                                Type "<code>terms-of-service</code>"</a>
                                                                <li><a href=links.html#sequential-link-types><span
                                                                                        class=secno>4.6.7.25</span>
                                                                                Sequential link types</a>
                                                                        <ol>
                                                                                <li><a href=links.html#link-type-next><span
                                                                                                        class=secno>4.6.7.25.1</span>
                                                                                                Link type
                                                                                                "<code>next</code>"</a>
                                                                                <li><a href=links.html#link-type-prev><span
                                                                                                        class=secno>4.6.7.25.2</span>
                                                                                                Link type
                                                                                                "<code>prev</code>"</a>
                                                                        </ol>
                                                                <li><a href=links.html#other-link-types><span
                                                                                        class=secno>4.6.7.26</span>
                                                                                Other link types</a>
                                                        </ol>
                                        </ol>
                                <li><a href=edits.html#edits><span class=secno>4.7</span> Edits</a>
                                        <ol>
                                                <li><a href=edits.html#the-ins-element><span class=secno>4.7.1</span>
                                                                The <code>ins</code> element</a>
                                                <li><a href=edits.html#the-del-element><span class=secno>4.7.2</span>
                                                                The <code>del</code> element</a>
                                                <li><a href=edits.html#attributes-common-to-ins-and-del-elements><span
                                                                        class=secno>4.7.3</span> Attributes common to
                                                                <code>ins</code> and <code>del</code> elements</a>
                                                <li><a href=edits.html#edits-and-paragraphs><span
                                                                        class=secno>4.7.4</span> Edits and
                                                                paragraphs</a>
                                                <li><a href=edits.html#edits-and-lists><span class=secno>4.7.5</span>
                                                                Edits and lists</a>
                                                <li><a href=edits.html#edits-and-tables><span class=secno>4.7.6</span>
                                                                Edits and tables</a>
                                        </ol>
                                <li><a href=embedded-content.html#embedded-content><span class=secno>4.8</span> Embedded
                                                content</a>
                                        <ol>
                                                <li><a href=embedded-content.html#the-picture-element><span
                                                                        class=secno>4.8.1</span> The
                                                                <code>picture</code> element</a>
                                                <li><a href=embedded-content.html#the-source-element><span
                                                                        class=secno>4.8.2</span> The <code>source</code>
                                                                element</a>
                                                <li><a href=embedded-content.html#the-img-element><span
                                                                        class=secno>4.8.3</span> The <code>img</code>
                                                                element</a>
                                                <li><a href=images.html#images><span class=secno>4.8.4</span> Images</a>
                                                        <ol>
                                                                <li><a href=images.html#introduction-3><span
                                                                                        class=secno>4.8.4.1</span>
                                                                                Introduction</a>
                                                                        <ol>
                                                                                <li><a href=images.html#adaptive-images><span
                                                                                                        class=secno>4.8.4.1.1</span>
                                                                                                Adaptive images</a>
                                                                        </ol>
                                                                <li><a href=images.html#attributes-common-to-source-and-img-elements><span
                                                                                        class=secno>4.8.4.2</span>
                                                                                Attributes common to
                                                                                <code>source</code>,
                                                                                <code>img</code>, and <code>link</code>
                                                                                elements</a>
                                                                        <ol>
                                                                                <li><a href=images.html#srcset-attributes><span
                                                                                                        class=secno>4.8.4.2.1</span>
                                                                                                Srcset attributes</a>
                                                                                <li><a href=images.html#sizes-attributes><span
                                                                                                        class=secno>4.8.4.2.2</span>
                                                                                                Sizes attributes</a>
                                                                        </ol>
                                                                <li><a href=images.html#images-processing-model><span
                                                                                        class=secno>4.8.4.3</span>
                                                                                Processing model</a>
                                                                        <ol>
                                                                                <li><a href=images.html#when-to-obtain-images><span
                                                                                                        class=secno>4.8.4.3.1</span>
                                                                                                When to obtain
                                                                                                images</a>
                                                                                <li><a href=images.html#reacting-to-dom-mutations><span
                                                                                                        class=secno>4.8.4.3.2</span>
                                                                                                Reacting to DOM
                                                                                                mutations</a>
                                                                                <li><a href=images.html#the-list-of-available-images><span
                                                                                                        class=secno>4.8.4.3.3</span>
                                                                                                The list of available
                                                                                                images</a>
                                                                                <li><a href=images.html#decoding-images><span
                                                                                                        class=secno>4.8.4.3.4</span>
                                                                                                Decoding images</a>
                                                                                <li><a href=images.html#updating-the-image-data><span
                                                                                                        class=secno>4.8.4.3.5</span>
                                                                                                Updating the image
                                                                                                data</a>
                                                                                <li><a href=images.html#preparing-an-image-for-presentation><span
                                                                                                        class=secno>4.8.4.3.6</span>
                                                                                                Preparing an image for
                                                                                                presentation</a>
                                                                                <li><a href=images.html#selecting-an-image-source><span
                                                                                                        class=secno>4.8.4.3.7</span>
                                                                                                Selecting an image
                                                                                                source</a>
                                                                                <li><a href=images.html#creating-a-source-set-from-attributes><span
                                                                                                        class=secno>4.8.4.3.8</span>
                                                                                                Creating a source set
                                                                                                from attributes</a>
                                                                                <li><a href=images.html#updating-the-source-set><span
                                                                                                        class=secno>4.8.4.3.9</span>
                                                                                                Updating the source
                                                                                                set</a>
                                                                                <li><a href=images.html#parsing-a-srcset-attribute><span
                                                                                                        class=secno>4.8.4.3.10</span>
                                                                                                Parsing a srcset
                                                                                                attribute</a>
                                                                                <li><a href=images.html#parsing-a-sizes-attribute><span
                                                                                                        class=secno>4.8.4.3.11</span>
                                                                                                Parsing a sizes
                                                                                                attribute</a>
                                                                                <li><a href=images.html#normalizing-the-source-densities><span
                                                                                                        class=secno>4.8.4.3.12</span>
                                                                                                Normalizing the source
                                                                                                densities</a>
                                                                                <li><a href=images.html#reacting-to-environment-changes><span
                                                                                                        class=secno>4.8.4.3.13</span>
                                                                                                Reacting to environment
                                                                                                changes</a>
                                                                        </ol>
                                                                <li><a href=images.html#alt><span
                                                                                        class=secno>4.8.4.4</span>
                                                                                Requirements for providing text to act
                                                                                as an alternative for images</a>
                                                                        <ol>
                                                                                <li><a href=images.html#general-guidelines><span
                                                                                                        class=secno>4.8.4.4.1</span>
                                                                                                General guidelines</a>
                                                                                <li><a href=images.html#a-link-or-button-containing-nothing-but-the-image><span
                                                                                                        class=secno>4.8.4.4.2</span>
                                                                                                A link or button
                                                                                                containing nothing but
                                                                                                the image</a>
                                                                                <li><a href=images.html#a-phrase-or-paragraph-with-an-alternative-graphical-representation:-charts,-diagrams,-graphs,-maps,-illustrations><span
                                                                                                        class=secno>4.8.4.4.3</span>
                                                                                                A phrase or paragraph
                                                                                                with an alternative
                                                                                                graphical
                                                                                                representation: charts,
                                                                                                diagrams, graphs, maps,
                                                                                                illustrations</a>
                                                                                <li><a href=images.html#a-short-phrase-or-label-with-an-alternative-graphical-representation:-icons,-logos><span
                                                                                                        class=secno>4.8.4.4.4</span>
                                                                                                A short phrase or label
                                                                                                with an alternative
                                                                                                graphical
                                                                                                representation: icons,
                                                                                                logos</a>
                                                                                <li><a href=images.html#text-that-has-been-rendered-to-a-graphic-for-typographical-effect><span
                                                                                                        class=secno>4.8.4.4.5</span>
                                                                                                Text that has been
                                                                                                rendered to a graphic
                                                                                                for typographical
                                                                                                effect</a>
                                                                                <li><a href=images.html#a-graphical-representation-of-some-of-the-surrounding-text><span
                                                                                                        class=secno>4.8.4.4.6</span>
                                                                                                A graphical
                                                                                                representation of some
                                                                                                of the surrounding
                                                                                                text</a>
                                                                                <li><a href=images.html#ancillary-images><span
                                                                                                        class=secno>4.8.4.4.7</span>
                                                                                                Ancillary images</a>
                                                                                <li><a href="images.html#a-purely-decorative-image-that-doesn't-add-any-information"><span
                                                                                                        class=secno>4.8.4.4.8</span>
                                                                                                A purely decorative
                                                                                                image that doesn't add
                                                                                                any information</a>
                                                                                <li><a href=images.html#a-group-of-images-that-form-a-single-larger-picture-with-no-links><span
                                                                                                        class=secno>4.8.4.4.9</span>
                                                                                                A group of images that
                                                                                                form a single larger
                                                                                                picture with no
                                                                                                links</a>
                                                                                <li><a href=images.html#a-group-of-images-that-form-a-single-larger-picture-with-links><span
                                                                                                        class=secno>4.8.4.4.10</span>
                                                                                                A group of images that
                                                                                                form a single larger
                                                                                                picture with links</a>
                                                                                <li><a href=images.html#a-key-part-of-the-content><span
                                                                                                        class=secno>4.8.4.4.11</span>
                                                                                                A key part of the
                                                                                                content</a>
                                                                                <li><a href=images.html#an-image-not-intended-for-the-user><span
                                                                                                        class=secno>4.8.4.4.12</span>
                                                                                                An image not intended
                                                                                                for the user</a>
                                                                                <li><a href=images.html#an-image-in-an-e-mail-or-private-document-intended-for-a-specific-person-who-is-known-to-be-able-to-view-images><span
                                                                                                        class=secno>4.8.4.4.13</span>
                                                                                                An image in an email or
                                                                                                private document
                                                                                                intended for a specific
                                                                                                person who is known to
                                                                                                be able to view
                                                                                                images</a>
                                                                                <li><a href=images.html#guidance-for-markup-generators><span
                                                                                                        class=secno>4.8.4.4.14</span>
                                                                                                Guidance for markup
                                                                                                generators</a>
                                                                                <li><a href=images.html#guidance-for-conformance-checkers><span
                                                                                                        class=secno>4.8.4.4.15</span>
                                                                                                Guidance for conformance
                                                                                                checkers</a>
                                                                        </ol>
                                                        </ol>
                                                <li><a href=iframe-embed-object.html#the-iframe-element><span
                                                                        class=secno>4.8.5</span> The
                                                                <code>iframe</code> element</a>
                                                <li><a href=iframe-embed-object.html#the-embed-element><span
                                                                        class=secno>4.8.6</span> The <code>embed</code>
                                                                element</a>
                                                <li><a href=iframe-embed-object.html#the-object-element><span
                                                                        class=secno>4.8.7</span> The <code>object</code>
                                                                element</a>
                                                <li><a href=media.html#the-video-element><span class=secno>4.8.8</span>
                                                                The <code>video</code> element</a>
                                                <li><a href=media.html#the-audio-element><span class=secno>4.8.9</span>
                                                                The <code>audio</code> element</a>
                                                <li><a href=media.html#the-track-element><span class=secno>4.8.10</span>
                                                                The <code>track</code> element</a>
                                                <li><a href=media.html#media-elements><span class=secno>4.8.11</span>
                                                                Media elements</a>
                                                        <ol>
                                                                <li><a href=media.html#error-codes><span
                                                                                        class=secno>4.8.11.1</span>
                                                                                Error codes</a>
                                                                <li><a href=media.html#location-of-the-media-resource><span
                                                                                        class=secno>4.8.11.2</span>
                                                                                Location of the media resource</a>
                                                                <li><a href=media.html#mime-types><span
                                                                                        class=secno>4.8.11.3</span> MIME
                                                                                types</a>
                                                                <li><a href=media.html#network-states><span
                                                                                        class=secno>4.8.11.4</span>
                                                                                Network states</a>
                                                                <li><a href=media.html#loading-the-media-resource><span
                                                                                        class=secno>4.8.11.5</span>
                                                                                Loading the media resource</a>
                                                                <li><a href=media.html#offsets-into-the-media-resource><span
                                                                                        class=secno>4.8.11.6</span>
                                                                                Offsets into the media resource</a>
                                                                <li><a href=media.html#ready-states><span
                                                                                        class=secno>4.8.11.7</span>
                                                                                Ready states</a>
                                                                <li><a href=media.html#playing-the-media-resource><span
                                                                                        class=secno>4.8.11.8</span>
                                                                                Playing the media resource</a>
                                                                <li><a href=media.html#seeking><span
                                                                                        class=secno>4.8.11.9</span>
                                                                                Seeking</a>
                                                                <li><a href=media.html#media-resources-with-multiple-media-tracks><span
                                                                                        class=secno>4.8.11.10</span>
                                                                                Media resources with multiple media
                                                                                tracks</a>
                                                                        <ol>
                                                                                <li><a href=media.html#audiotracklist-and-videotracklist-objects><span
                                                                                                        class=secno>4.8.11.10.1</span>
                                                                                                <code>AudioTrackList</code>
                                                                                                and
                                                                                                <code>VideoTrackList</code>
                                                                                                objects</a>
                                                                                <li><a href=media.html#selecting-specific-audio-and-video-tracks-declaratively><span
                                                                                                        class=secno>4.8.11.10.2</span>
                                                                                                Selecting specific audio
                                                                                                and video tracks
                                                                                                declaratively</a>
                                                                        </ol>
                                                                <li><a href=media.html#timed-text-tracks><span
                                                                                        class=secno>4.8.11.11</span>
                                                                                Timed text tracks</a>
                                                                        <ol>
                                                                                <li><a href=media.html#text-track-model><span
                                                                                                        class=secno>4.8.11.11.1</span>
                                                                                                Text track model</a>
                                                                                <li><a href=media.html#sourcing-in-band-text-tracks><span
                                                                                                        class=secno>4.8.11.11.2</span>
                                                                                                Sourcing in-band text
                                                                                                tracks</a>
                                                                                <li><a href=media.html#sourcing-out-of-band-text-tracks><span
                                                                                                        class=secno>4.8.11.11.3</span>
                                                                                                Sourcing out-of-band
                                                                                                text tracks</a>
                                                                                <li><a href=media.html#guidelines-for-exposing-cues-in-various-formats-as-text-track-cues><span
                                                                                                        class=secno>4.8.11.11.4</span>
                                                                                                Guidelines for exposing
                                                                                                cues in various formats
                                                                                                as text track cues</a>
                                                                                <li><a href=media.html#text-track-api><span
                                                                                                        class=secno>4.8.11.11.5</span>
                                                                                                Text track API</a>
                                                                                <li><a href=media.html#cue-events><span
                                                                                                        class=secno>4.8.11.11.6</span>
                                                                                                Event handlers for
                                                                                                objects of the text
                                                                                                track APIs</a>
                                                                                <li><a href=media.html#best-practices-for-metadata-text-tracks><span
                                                                                                        class=secno>4.8.11.11.7</span>
                                                                                                Best practices for
                                                                                                metadata text tracks</a>
                                                                        </ol>
                                                                <li><a href=media.html#identifying-a-track-kind-through-a-url><span
                                                                                        class=secno>4.8.11.12</span>
                                                                                Identifying a track kind through a
                                                                                URL</a>
                                                                <li><a href=media.html#user-interface><span
                                                                                        class=secno>4.8.11.13</span>
                                                                                User interface</a>
                                                                <li><a href=media.html#time-ranges><span
                                                                                        class=secno>4.8.11.14</span>
                                                                                Time ranges</a>
                                                                <li><a href=media.html#the-trackevent-interface><span
                                                                                        class=secno>4.8.11.15</span> The
                                                                                <code>TrackEvent</code> interface</a>
                                                                <li><a href=media.html#mediaevents><span
                                                                                        class=secno>4.8.11.16</span>
                                                                                Events summary</a>
                                                                <li><a href=media.html#security-and-privacy-considerations><span
                                                                                        class=secno>4.8.11.17</span>
                                                                                Security and privacy considerations</a>
                                                                <li><a href=media.html#best-practices-for-authors-using-media-elements><span
                                                                                        class=secno>4.8.11.18</span>
                                                                                Best practices for authors using media
                                                                                elements</a>
                                                                <li><a href=media.html#best-practices-for-implementers-of-media-elements><span
                                                                                        class=secno>4.8.11.19</span>
                                                                                Best practices for implementers of media
                                                                                elements</a>
                                                        </ol>
                                                <li><a href=image-maps.html#the-map-element><span
                                                                        class=secno>4.8.12</span> The <code>map</code>
                                                                element</a>
                                                <li><a href=image-maps.html#the-area-element><span
                                                                        class=secno>4.8.13</span> The <code>area</code>
                                                                element</a>
                                                <li><a href=image-maps.html#image-maps><span class=secno>4.8.14</span>
                                                                Image maps</a>
                                                        <ol>
                                                                <li><a href=image-maps.html#authoring><span
                                                                                        class=secno>4.8.14.1</span>
                                                                                Authoring</a>
                                                                <li><a href=image-maps.html#image-map-processing-model><span
                                                                                        class=secno>4.8.14.2</span>
                                                                                Processing model</a>
                                                        </ol>
                                                <li><a href=embedded-content-other.html#mathml><span
                                                                        class=secno>4.8.15</span> MathML</a>
                                                <li><a href=embedded-content-other.html#svg-0><span
                                                                        class=secno>4.8.16</span> SVG</a>
                                                <li><a href=embedded-content-other.html#dimension-attributes><span
                                                                        class=secno>4.8.17</span> Dimension
                                                                attributes</a>
                                        </ol>
                                <li><a href=tables.html#tables><span class=secno>4.9</span> Tabular data</a>
                                        <ol>
                                                <li><a href=tables.html#the-table-element><span class=secno>4.9.1</span>
                                                                The <code>table</code> element</a>
                                                        <ol>
                                                                <li><a href=tables.html#table-descriptions-techniques><span
                                                                                        class=secno>4.9.1.1</span>
                                                                                Techniques for describing tables</a>
                                                                <li><a href=tables.html#table-layout-techniques><span
                                                                                        class=secno>4.9.1.2</span>
                                                                                Techniques for table design</a>
                                                        </ol>
                                                <li><a href=tables.html#the-caption-element><span
                                                                        class=secno>4.9.2</span> The
                                                                <code>caption</code> element</a>
                                                <li><a href=tables.html#the-colgroup-element><span
                                                                        class=secno>4.9.3</span> The
                                                                <code>colgroup</code> element</a>
                                                <li><a href=tables.html#the-col-element><span class=secno>4.9.4</span>
                                                                The <code>col</code> element</a>
                                                <li><a href=tables.html#the-tbody-element><span class=secno>4.9.5</span>
                                                                The <code>tbody</code> element</a>
                                                <li><a href=tables.html#the-thead-element><span class=secno>4.9.6</span>
                                                                The <code>thead</code> element</a>
                                                <li><a href=tables.html#the-tfoot-element><span class=secno>4.9.7</span>
                                                                The <code>tfoot</code> element</a>
                                                <li><a href=tables.html#the-tr-element><span class=secno>4.9.8</span>
                                                                The <code>tr</code> element</a>
                                                <li><a href=tables.html#the-td-element><span class=secno>4.9.9</span>
                                                                The <code>td</code> element</a>
                                                <li><a href=tables.html#the-th-element><span class=secno>4.9.10</span>
                                                                The <code>th</code> element</a>
                                                <li><a href=tables.html#attributes-common-to-td-and-th-elements><span
                                                                        class=secno>4.9.11</span> Attributes common to
                                                                <code>td</code> and <code>th</code> elements</a>
                                                <li><a href=tables.html#table-processing-model><span
                                                                        class=secno>4.9.12</span> Processing model</a>
                                                        <ol>
                                                                <li><a href=tables.html#forming-a-table><span
                                                                                        class=secno>4.9.12.1</span>
                                                                                Forming a table</a>
                                                                <li><a href=tables.html#header-and-data-cell-semantics><span
                                                                                        class=secno>4.9.12.2</span>
                                                                                Forming relationships between data cells
                                                                                and header cells</a>
                                                        </ol>
                                                <li><a href=tables.html#table-examples><span class=secno>4.9.13</span>
                                                                Examples</a>
                                        </ol>
                                <li><a href=forms.html#forms><span class=secno>4.10</span> Forms</a>
                                        <ol>
                                                <li><a href=forms.html#introduction-4><span class=secno>4.10.1</span>
                                                                Introduction</a>
                                                        <ol>
                                                                <li><a href="forms.html#writing-a-form's-user-interface"><span
                                                                                        class=secno>4.10.1.1</span>
                                                                                Writing a form's user interface</a>
                                                                <li><a href=forms.html#implementing-the-server-side-processing-for-a-form><span
                                                                                        class=secno>4.10.1.2</span>
                                                                                Implementing the server-side processing
                                                                                for a form</a>
                                                                <li><a href=forms.html#configuring-a-form-to-communicate-with-a-server><span
                                                                                        class=secno>4.10.1.3</span>
                                                                                Configuring a form to communicate with a
                                                                                server</a>
                                                                <li><a href=forms.html#client-side-form-validation><span
                                                                                        class=secno>4.10.1.4</span>
                                                                                Client-side form validation</a>
                                                                <li><a href=forms.html#enabling-client-side-automatic-filling-of-form-controls><span
                                                                                        class=secno>4.10.1.5</span>
                                                                                Enabling client-side automatic filling
                                                                                of form controls</a>
                                                                <li><a href=forms.html#improving-the-user-experience-on-mobile-devices><span
                                                                                        class=secno>4.10.1.6</span>
                                                                                Improving the user experience on mobile
                                                                                devices</a>
                                                                <li><a href=forms.html#the-difference-between-the-field-type,-the-autofill-field-name,-and-the-input-modality><span
                                                                                        class=secno>4.10.1.7</span> The
                                                                                difference between the field type, the
                                                                                autofill field name, and the input
                                                                                modality</a>
                                                                <li><a href=forms.html#input-author-notes><span
                                                                                        class=secno>4.10.1.8</span>
                                                                                Date, time, and number formats</a>
                                                        </ol>
                                                <li><a href=forms.html#categories><span class=secno>4.10.2</span>
                                                                Categories</a>
                                                <li><a href=forms.html#the-form-element><span class=secno>4.10.3</span>
                                                                The <code>form</code> element</a>
                                                <li><a href=forms.html#the-label-element><span class=secno>4.10.4</span>
                                                                The <code>label</code> element</a>
                                                <li><a href=input.html#the-input-element><span class=secno>4.10.5</span>
                                                                The <code>input</code> element</a>
                                                        <ol>
                                                                <li><a href=input.html#states-of-the-type-attribute><span
                                                                                        class=secno>4.10.5.1</span>
                                                                                States of the <code>type</code>
                                                                                attribute</a>
                                                                        <ol>
                                                                                <li><a href="input.html#hidden-state-(type=hidden)"><span
                                                                                                        class=secno>4.10.5.1.1</span>
                                                                                                Hidden state
                                                                                                (<code>type=hidden</code>)</a>
                                                                                <li><a href="input.html#text-(type=text)-state-and-search-state-(type=search)"><span
                                                                                                        class=secno>4.10.5.1.2</span>
                                                                                                Text
                                                                                                (<code>type=text</code>)
                                                                                                state and Search state
                                                                                                (<code>type=search</code>)</a>
                                                                                <li><a href="input.html#telephone-state-(type=tel)"><span
                                                                                                        class=secno>4.10.5.1.3</span>
                                                                                                Telephone state
                                                                                                (<code>type=tel</code>)</a>
                                                                                <li><a href="input.html#url-state-(type=url)"><span
                                                                                                        class=secno>4.10.5.1.4</span>
                                                                                                URL state
                                                                                                (<code>type=url</code>)</a>
                                                                                <li><a href="input.html#email-state-(type=email)"><span
                                                                                                        class=secno>4.10.5.1.5</span>
                                                                                                Email state
                                                                                                (<code>type=email</code>)</a>
                                                                                <li><a href="input.html#password-state-(type=password)"><span
                                                                                                        class=secno>4.10.5.1.6</span>
                                                                                                Password state
                                                                                                (<code>type=password</code>)</a>
                                                                                <li><a href="input.html#date-state-(type=date)"><span
                                                                                                        class=secno>4.10.5.1.7</span>
                                                                                                Date state
                                                                                                (<code>type=date</code>)</a>
                                                                                <li><a href="input.html#month-state-(type=month)"><span
                                                                                                        class=secno>4.10.5.1.8</span>
                                                                                                Month state
                                                                                                (<code>type=month</code>)</a>
                                                                                <li><a href="input.html#week-state-(type=week)"><span
                                                                                                        class=secno>4.10.5.1.9</span>
                                                                                                Week state
                                                                                                (<code>type=week</code>)</a>
                                                                                <li><a href="input.html#time-state-(type=time)"><span
                                                                                                        class=secno>4.10.5.1.10</span>
                                                                                                Time state
                                                                                                (<code>type=time</code>)</a>
                                                                                <li><a href="input.html#local-date-and-time-state-(type=datetime-local)"><span
                                                                                                        class=secno>4.10.5.1.11</span>
                                                                                                Local Date and Time
                                                                                                state
                                                                                                (<code>type=datetime-local</code>)</a>
                                                                                <li><a href="input.html#number-state-(type=number)"><span
                                                                                                        class=secno>4.10.5.1.12</span>
                                                                                                Number state
                                                                                                (<code>type=number</code>)</a>
                                                                                <li><a href="input.html#range-state-(type=range)"><span
                                                                                                        class=secno>4.10.5.1.13</span>
                                                                                                Range state
                                                                                                (<code>type=range</code>)</a>
                                                                                <li><a href="input.html#color-state-(type=color)"><span
                                                                                                        class=secno>4.10.5.1.14</span>
                                                                                                Color state
                                                                                                (<code>type=color</code>)</a>
                                                                                <li><a href="input.html#checkbox-state-(type=checkbox)"><span
                                                                                                        class=secno>4.10.5.1.15</span>
                                                                                                Checkbox state
                                                                                                (<code>type=checkbox</code>)</a>
                                                                                <li><a href="input.html#radio-button-state-(type=radio)"><span
                                                                                                        class=secno>4.10.5.1.16</span>
                                                                                                Radio Button state
                                                                                                (<code>type=radio</code>)</a>
                                                                                <li><a href="input.html#file-upload-state-(type=file)"><span
                                                                                                        class=secno>4.10.5.1.17</span>
                                                                                                File Upload state
                                                                                                (<code>type=file</code>)</a>
                                                                                <li><a href="input.html#submit-button-state-(type=submit)"><span
                                                                                                        class=secno>4.10.5.1.18</span>
                                                                                                Submit Button state
                                                                                                (<code>type=submit</code>)</a>
                                                                                <li><a href="input.html#image-button-state-(type=image)"><span
                                                                                                        class=secno>4.10.5.1.19</span>
                                                                                                Image Button state
                                                                                                (<code>type=image</code>)</a>
                                                                                <li><a href="input.html#reset-button-state-(type=reset)"><span
                                                                                                        class=secno>4.10.5.1.20</span>
                                                                                                Reset Button state
                                                                                                (<code>type=reset</code>)</a>
                                                                                <li><a href="input.html#button-state-(type=button)"><span
                                                                                                        class=secno>4.10.5.1.21</span>
                                                                                                Button state
                                                                                                (<code>type=button</code>)</a>
                                                                        </ol>
                                                                <li><a href=input.html#input-impl-notes><span
                                                                                        class=secno>4.10.5.2</span>
                                                                                Implementation notes regarding
                                                                                localization of form controls</a>
                                                                <li><a href=input.html#common-input-element-attributes><span
                                                                                        class=secno>4.10.5.3</span>
                                                                                Common <code>input</code> element
                                                                                attributes</a>
                                                                        <ol>
                                                                                <li><a href=input.html#the-maxlength-and-minlength-attributes><span
                                                                                                        class=secno>4.10.5.3.1</span>
                                                                                                The
                                                                                                <code>maxlength</code>
                                                                                                and
                                                                                                <code>minlength</code>
                                                                                                attributes</a>
                                                                                <li><a href=input.html#the-size-attribute><span
                                                                                                        class=secno>4.10.5.3.2</span>
                                                                                                The <code>size</code>
                                                                                                attribute</a>
                                                                                <li><a href=input.html#the-readonly-attribute><span
                                                                                                        class=secno>4.10.5.3.3</span>
                                                                                                The
                                                                                                <code>readonly</code>
                                                                                                attribute</a>
                                                                                <li><a href=input.html#the-required-attribute><span
                                                                                                        class=secno>4.10.5.3.4</span>
                                                                                                The
                                                                                                <code>required</code>
                                                                                                attribute</a>
                                                                                <li><a href=input.html#the-multiple-attribute><span
                                                                                                        class=secno>4.10.5.3.5</span>
                                                                                                The
                                                                                                <code>multiple</code>
                                                                                                attribute</a>
                                                                                <li><a href=input.html#the-pattern-attribute><span
                                                                                                        class=secno>4.10.5.3.6</span>
                                                                                                The <code>pattern</code>
                                                                                                attribute</a>
                                                                                <li><a href=input.html#the-min-and-max-attributes><span
                                                                                                        class=secno>4.10.5.3.7</span>
                                                                                                The <code>min</code> and
                                                                                                <code>max</code>
                                                                                                attributes</a>
                                                                                <li><a href=input.html#the-step-attribute><span
                                                                                                        class=secno>4.10.5.3.8</span>
                                                                                                The <code>step</code>
                                                                                                attribute</a>
                                                                                <li><a href=input.html#the-list-attribute><span
                                                                                                        class=secno>4.10.5.3.9</span>
                                                                                                The <code>list</code>
                                                                                                attribute</a>
                                                                                <li><a href=input.html#the-placeholder-attribute><span
                                                                                                        class=secno>4.10.5.3.10</span>
                                                                                                The
                                                                                                <code>placeholder</code>
                                                                                                attribute</a>
                                                                        </ol>
                                                                <li><a href=input.html#common-input-element-apis><span
                                                                                        class=secno>4.10.5.4</span>
                                                                                Common <code>input</code> element
                                                                                APIs</a>
                                                                <li><a href=input.html#common-input-element-events><span
                                                                                        class=secno>4.10.5.5</span>
                                                                                Common event behaviors</a>
                                                        </ol>
                                                <li><a href=form-elements.html#the-button-element><span
                                                                        class=secno>4.10.6</span> The
                                                                <code>button</code> element</a>
                                                <li><a href=form-elements.html#the-select-element><span
                                                                        class=secno>4.10.7</span> The
                                                                <code>select</code> element</a>
                                                <li><a href=form-elements.html#the-datalist-element><span
                                                                        class=secno>4.10.8</span> The
                                                                <code>datalist</code> element</a>
                                                <li><a href=form-elements.html#the-optgroup-element><span
                                                                        class=secno>4.10.9</span> The
                                                                <code>optgroup</code> element</a>
                                                <li><a href=form-elements.html#the-option-element><span
                                                                        class=secno>4.10.10</span> The
                                                                <code>option</code> element</a>
                                                <li><a href=form-elements.html#the-textarea-element><span
                                                                        class=secno>4.10.11</span> The
                                                                <code>textarea</code> element</a>
                                                <li><a href=form-elements.html#the-output-element><span
                                                                        class=secno>4.10.12</span> The
                                                                <code>output</code> element</a>
                                                <li><a href=form-elements.html#the-progress-element><span
                                                                        class=secno>4.10.13</span> The
                                                                <code>progress</code> element</a>
                                                <li><a href=form-elements.html#the-meter-element><span
                                                                        class=secno>4.10.14</span> The
                                                                <code>meter</code> element</a>
                                                <li><a href=form-elements.html#the-fieldset-element><span
                                                                        class=secno>4.10.15</span> The
                                                                <code>fieldset</code> element</a>
                                                <li><a href=form-elements.html#the-legend-element><span
                                                                        class=secno>4.10.16</span> The
                                                                <code>legend</code> element</a>
                                                <li><a href=form-control-infrastructure.html#form-control-infrastructure><span
                                                                        class=secno>4.10.17</span> Form control
                                                                infrastructure</a>
                                                        <ol>
                                                                <li><a href="form-control-infrastructure.html#a-form-control's-value"><span
                                                                                        class=secno>4.10.17.1</span> A
                                                                                form control's value</a>
                                                                <li><a href=form-control-infrastructure.html#mutability><span
                                                                                        class=secno>4.10.17.2</span>
                                                                                Mutability</a>
                                                                <li><a href=form-control-infrastructure.html#association-of-controls-and-forms><span
                                                                                        class=secno>4.10.17.3</span>
                                                                                Association of controls and forms</a>
                                                        </ol>
                                                <li><a href=form-control-infrastructure.html#attributes-common-to-form-controls><span
                                                                        class=secno>4.10.18</span> Attributes common to
                                                                form controls</a>
                                                        <ol>
                                                                <li><a href=form-control-infrastructure.html#naming-form-controls:-the-name-attribute><span
                                                                                        class=secno>4.10.18.1</span>
                                                                                Naming form controls: the
                                                                                <code>name</code> attribute</a>
                                                                <li><a href=form-control-infrastructure.html#submitting-element-directionality:-the-dirname-attribute><span
                                                                                        class=secno>4.10.18.2</span>
                                                                                Submitting element directionality: the
                                                                                <code>dirname</code> attribute</a>
                                                                <li><a href=form-control-infrastructure.html#limiting-user-input-length:-the-maxlength-attribute><span
                                                                                        class=secno>4.10.18.3</span>
                                                                                Limiting user input length: the
                                                                                <code>maxlength</code> attribute</a>
                                                                <li><a href=form-control-infrastructure.html#setting-minimum-input-length-requirements:-the-minlength-attribute><span
                                                                                        class=secno>4.10.18.4</span>
                                                                                Setting minimum input length
                                                                                requirements: the <code>minlength</code>
                                                                                attribute</a>
                                                                <li><a href=form-control-infrastructure.html#enabling-and-disabling-form-controls:-the-disabled-attribute><span
                                                                                        class=secno>4.10.18.5</span>
                                                                                Enabling and disabling form controls:
                                                                                the <code>disabled</code> attribute</a>
                                                                <li><a href=form-control-infrastructure.html#form-submission-attributes><span
                                                                                        class=secno>4.10.18.6</span>
                                                                                Form submission attributes</a>
                                                                <li><a href=form-control-infrastructure.html#autofill><span
                                                                                        class=secno>4.10.18.7</span>
                                                                                Autofill</a>
                                                                        <ol>
                                                                                <li><a href=form-control-infrastructure.html#autofilling-form-controls:-the-autocomplete-attribute><span
                                                                                                        class=secno>4.10.18.7.1</span>
                                                                                                Autofilling form
                                                                                                controls: the
                                                                                                <code>autocomplete</code>
                                                                                                attribute</a>
                                                                                <li><a href=form-control-infrastructure.html#autofill-processing-model><span
                                                                                                        class=secno>4.10.18.7.2</span>
                                                                                                Processing model</a>
                                                                        </ol>
                                                        </ol>
                                                <li><a href=form-control-infrastructure.html#textFieldSelection><span
                                                                        class=secno>4.10.19</span> APIs for the text
                                                                control selections</a>
                                                <li><a href=form-control-infrastructure.html#constraints><span
                                                                        class=secno>4.10.20</span> Constraints</a>
                                                        <ol>
                                                                <li><a href=form-control-infrastructure.html#definitions><span
                                                                                        class=secno>4.10.20.1</span>
                                                                                Definitions</a>
                                                                <li><a href=form-control-infrastructure.html#constraint-validation><span
                                                                                        class=secno>4.10.20.2</span>
                                                                                Constraint validation</a>
                                                                <li><a href=form-control-infrastructure.html#the-constraint-validation-api><span
                                                                                        class=secno>4.10.20.3</span> The
                                                                                constraint validation API</a>
                                                                <li><a href=form-control-infrastructure.html#security-forms><span
                                                                                        class=secno>4.10.20.4</span>
                                                                                Security</a>
                                                        </ol>
                                                <li><a href=form-control-infrastructure.html#form-submission-2><span
                                                                        class=secno>4.10.21</span> Form submission</a>
                                                        <ol>
                                                                <li><a href=form-control-infrastructure.html#introduction-5><span
                                                                                        class=secno>4.10.21.1</span>
                                                                                Introduction</a>
                                                                <li><a href=form-control-infrastructure.html#implicit-submission><span
                                                                                        class=secno>4.10.21.2</span>
                                                                                Implicit submission</a>
                                                                <li><a href=form-control-infrastructure.html#form-submission-algorithm><span
                                                                                        class=secno>4.10.21.3</span>
                                                                                Form submission algorithm</a>
                                                                <li><a href=form-control-infrastructure.html#constructing-form-data-set><span
                                                                                        class=secno>4.10.21.4</span>
                                                                                Constructing the entry list</a>
                                                                <li><a href=form-control-infrastructure.html#selecting-a-form-submission-encoding><span
                                                                                        class=secno>4.10.21.5</span>
                                                                                Selecting a form submission encoding</a>
                                                                <li><a href=form-control-infrastructure.html#converting-an-entry-list-to-a-list-of-name-value-pairs><span
                                                                                        class=secno>4.10.21.6</span>
                                                                                Converting an entry list to a list of
                                                                                name-value pairs</a>
                                                                <li><a href=form-control-infrastructure.html#url-encoded-form-data><span
                                                                                        class=secno>4.10.21.7</span>
                                                                                URL-encoded form data</a>
                                                                <li><a href=form-control-infrastructure.html#multipart-form-data><span
                                                                                        class=secno>4.10.21.8</span>
                                                                                Multipart form data</a>
                                                                <li><a href=form-control-infrastructure.html#plain-text-form-data><span
                                                                                        class=secno>4.10.21.9</span>
                                                                                Plain text form data</a>
                                                                <li><a href=form-control-infrastructure.html#the-submitevent-interface><span
                                                                                        class=secno>4.10.21.10</span>
                                                                                The <code>SubmitEvent</code>
                                                                                interface</a>
                                                                <li><a href=form-control-infrastructure.html#the-formdataevent-interface><span
                                                                                        class=secno>4.10.21.11</span>
                                                                                The <code>FormDataEvent</code>
                                                                                interface</a>
                                                        </ol>
                                                <li><a href=form-control-infrastructure.html#resetting-a-form><span
                                                                        class=secno>4.10.22</span> Resetting a form</a>
                                        </ol>
                                <li><a href=interactive-elements.html#interactive-elements><span class=secno>4.11</span>
                                                Interactive elements</a>
                                        <ol>
                                                <li><a href=interactive-elements.html#the-details-element><span
                                                                        class=secno>4.11.1</span> The
                                                                <code>details</code> element</a>
                                                <li><a href=interactive-elements.html#the-summary-element><span
                                                                        class=secno>4.11.2</span> The
                                                                <code>summary</code> element</a>
                                                <li><a href=interactive-elements.html#commands><span
                                                                        class=secno>4.11.3</span> Commands</a>
                                                        <ol>
                                                                <li><a href=interactive-elements.html#facets-2><span
                                                                                        class=secno>4.11.3.1</span>
                                                                                Facets</a>
                                                                <li><a href=interactive-elements.html#using-the-a-element-to-define-a-command><span
                                                                                        class=secno>4.11.3.2</span>
                                                                                Using the <code>a</code> element to
                                                                                define a command</a>
                                                                <li><a href=interactive-elements.html#using-the-button-element-to-define-a-command><span
                                                                                        class=secno>4.11.3.3</span>
                                                                                Using the <code>button</code> element to
                                                                                define a command</a>
                                                                <li><a href=interactive-elements.html#using-the-input-element-to-define-a-command><span
                                                                                        class=secno>4.11.3.4</span>
                                                                                Using the <code>input</code> element to
                                                                                define a command</a>
                                                                <li><a href=interactive-elements.html#using-the-option-element-to-define-a-command><span
                                                                                        class=secno>4.11.3.5</span>
                                                                                Using the <code>option</code> element to
                                                                                define a command</a>
                                                                <li><a href=interactive-elements.html#using-the-accesskey-attribute-on-a-legend-element-to-define-a-command><span
                                                                                        class=secno>4.11.3.6</span>
                                                                                Using the <code>accesskey</code>
                                                                                attribute
                                                                                on a <code>legend</code> element to
                                                                                define a command</a>
                                                                <li><a href=interactive-elements.html#using-the-accesskey-attribute-to-define-a-command-on-other-elements><span
                                                                                        class=secno>4.11.3.7</span>
                                                                                Using the <code>accesskey</code>
                                                                                attribute to define a command on other
                                                                                elements</a>
                                                        </ol>
                                                <li><a href=interactive-elements.html#the-dialog-element><span
                                                                        class=secno>4.11.4</span> The
                                                                <code>dialog</code> element</a>
                                        </ol>
                                <li><a href=scripting.html#scripting-3><span class=secno>4.12</span> Scripting</a>
                                        <ol>
                                                <li><a href=scripting.html#the-script-element><span
                                                                        class=secno>4.12.1</span> The
                                                                <code>script</code> element</a>
                                                        <ol>
                                                                <li><a href=scripting.html#script-processing-model><span
                                                                                        class=secno>4.12.1.1</span>
                                                                                Processing model</a>
                                                                <li><a href=scripting.html#scriptingLanguages><span
                                                                                        class=secno>4.12.1.2</span>
                                                                                Scripting languages</a>
                                                                <li><a href=scripting.html#restrictions-for-contents-of-script-elements><span
                                                                                        class=secno>4.12.1.3</span>
                                                                                Restrictions for contents of
                                                                                <code>script</code> elements</a>
                                                                <li><a href=scripting.html#inline-documentation-for-external-scripts><span
                                                                                        class=secno>4.12.1.4</span>
                                                                                Inline documentation for external
                                                                                scripts</a>
                                                                <li><a href=scripting.html#scriptTagXSLT><span
                                                                                        class=secno>4.12.1.5</span>
                                                                                Interaction of <code>script</code>
                                                                                elements and XSLT</a>
                                                        </ol>
                                                <li><a href=scripting.html#the-noscript-element><span
                                                                        class=secno>4.12.2</span> The
                                                                <code>noscript</code> element</a>
                                                <li><a href=scripting.html#the-template-element><span
                                                                        class=secno>4.12.3</span> The
                                                                <code>template</code> element</a>
                                                        <ol>
                                                                <li><a href=scripting.html#template-XSLT-XPath><span
                                                                                        class=secno>4.12.3.1</span>
                                                                                Interaction of <code>template</code>
                                                                                elements with XSLT and XPath</a>
                                                        </ol>
                                                <li><a href=scripting.html#the-slot-element><span
                                                                        class=secno>4.12.4</span> The <code>slot</code>
                                                                element</a>
                                                <li><a href=canvas.html#the-canvas-element><span
                                                                        class=secno>4.12.5</span> The
                                                                <code>canvas</code> element</a>
                                                        <ol>
                                                                <li><a href=canvas.html#2dcontext><span
                                                                                        class=secno>4.12.5.1</span> The
                                                                                2D rendering context</a>
                                                                        <ol>
                                                                                <li><a href=canvas.html#implementation-notes><span
                                                                                                        class=secno>4.12.5.1.1</span>
                                                                                                Implementation notes</a>
                                                                                <li><a href=canvas.html#the-canvas-state><span
                                                                                                        class=secno>4.12.5.1.2</span>
                                                                                                The canvas state</a>
                                                                                <li><a href=canvas.html#line-styles><span
                                                                                                        class=secno>4.12.5.1.3</span>
                                                                                                Line styles</a>
                                                                                <li><a href=canvas.html#text-styles><span
                                                                                                        class=secno>4.12.5.1.4</span>
                                                                                                Text styles</a>
                                                                                <li><a href=canvas.html#building-paths><span
                                                                                                        class=secno>4.12.5.1.5</span>
                                                                                                Building paths</a>
                                                                                <li><a href=canvas.html#path2d-objects><span
                                                                                                        class=secno>4.12.5.1.6</span>
                                                                                                <code>Path2D</code>
                                                                                                objects</a>
                                                                                <li><a href=canvas.html#transformations><span
                                                                                                        class=secno>4.12.5.1.7</span>
                                                                                                Transformations</a>
                                                                                <li><a href=canvas.html#image-sources-for-2d-rendering-contexts><span
                                                                                                        class=secno>4.12.5.1.8</span>
                                                                                                Image sources for 2D
                                                                                                rendering contexts</a>
                                                                                <li><a href=canvas.html#fill-and-stroke-styles><span
                                                                                                        class=secno>4.12.5.1.9</span>
                                                                                                Fill and stroke
                                                                                                styles</a>
                                                                                <li><a href=canvas.html#drawing-rectangles-to-the-bitmap><span
                                                                                                        class=secno>4.12.5.1.10</span>
                                                                                                Drawing rectangles to
                                                                                                the bitmap</a>
                                                                                <li><a href=canvas.html#drawing-text-to-the-bitmap><span
                                                                                                        class=secno>4.12.5.1.11</span>
                                                                                                Drawing text to the
                                                                                                bitmap</a>
                                                                                <li><a href=canvas.html#drawing-paths-to-the-canvas><span
                                                                                                        class=secno>4.12.5.1.12</span>
                                                                                                Drawing paths to the
                                                                                                canvas</a>
                                                                                <li><a href=canvas.html#drawing-focus-rings-and-scrolling-paths-into-view><span
                                                                                                        class=secno>4.12.5.1.13</span>
                                                                                                Drawing focus rings and
                                                                                                scrolling paths into
                                                                                                view</a>
                                                                                <li><a href=canvas.html#drawing-images><span
                                                                                                        class=secno>4.12.5.1.14</span>
                                                                                                Drawing images</a>
                                                                                <li><a href=canvas.html#pixel-manipulation><span
                                                                                                        class=secno>4.12.5.1.15</span>
                                                                                                Pixel manipulation</a>
                                                                                <li><a href=canvas.html#compositing><span
                                                                                                        class=secno>4.12.5.1.16</span>
                                                                                                Compositing</a>
                                                                                <li><a href=canvas.html#image-smoothing><span
                                                                                                        class=secno>4.12.5.1.17</span>
                                                                                                Image smoothing</a>
                                                                                <li><a href=canvas.html#shadows><span
                                                                                                        class=secno>4.12.5.1.18</span>
                                                                                                Shadows</a>
                                                                                <li><a href=canvas.html#filters><span
                                                                                                        class=secno>4.12.5.1.19</span>
                                                                                                Filters</a>
                                                                                <li><a href=canvas.html#working-with-externally-defined-svg-filters><span
                                                                                                        class=secno>4.12.5.1.20</span>
                                                                                                Working with
                                                                                                externally-defined SVG
                                                                                                filters</a>
                                                                                <li><a href=canvas.html#drawing-model><span
                                                                                                        class=secno>4.12.5.1.21</span>
                                                                                                Drawing model</a>
                                                                                <li><a href=canvas.html#best-practices><span
                                                                                                        class=secno>4.12.5.1.22</span>
                                                                                                Best practices</a>
                                                                                <li><a href=canvas.html#examples><span
                                                                                                        class=secno>4.12.5.1.23</span>
                                                                                                Examples</a>
                                                                        </ol>
                                                                <li><a href=canvas.html#the-imagebitmap-rendering-context><span
                                                                                        class=secno>4.12.5.2</span> The
                                                                                <code>ImageBitmap</code> rendering
                                                                                context</a>
                                                                        <ol>
                                                                                <li><a href=canvas.html#introduction-6><span
                                                                                                        class=secno>4.12.5.2.1</span>
                                                                                                Introduction</a>
                                                                                <li><a href=canvas.html#the-imagebitmaprenderingcontext-interface><span
                                                                                                        class=secno>4.12.5.2.2</span>
                                                                                                The
                                                                                                <code>ImageBitmapRenderingContext</code>
                                                                                                interface</a>
                                                                        </ol>
                                                                <li><a href=canvas.html#the-offscreencanvas-interface><span
                                                                                        class=secno>4.12.5.3</span> The
                                                                                <code>OffscreenCanvas</code>
                                                                                interface</a>
                                                                        <ol>
                                                                                <li><a href=canvas.html#the-offscreen-2d-rendering-context><span
                                                                                                        class=secno>4.12.5.3.1</span>
                                                                                                The offscreen 2D
                                                                                                rendering context</a>
                                                                        </ol>
                                                                <li><a href=canvas.html#colour-spaces-and-colour-correction><span
                                                                                        class=secno>4.12.5.4</span>
                                                                                Color spaces and color space
                                                                                conversion</a>
                                                                <li><a href=canvas.html#serialising-bitmaps-to-a-file><span
                                                                                        class=secno>4.12.5.5</span>
                                                                                Serializing bitmaps to a file</a>
                                                                <li><a href=canvas.html#security-with-canvas-elements><span
                                                                                        class=secno>4.12.5.6</span>
                                                                                Security with <code>canvas</code>
                                                                                elements</a>
                                                                <li><a href=canvas.html#premultiplied-alpha-and-the-2d-rendering-context><span
                                                                                        class=secno>4.12.5.7</span>
                                                                                Premultiplied alpha and the 2D rendering
                                                                                context</a>
                                                        </ol>
                                        </ol>
                                <li><a href=custom-elements.html#custom-elements><span class=secno>4.13</span> Custom
                                                elements</a>
                                        <ol>
                                                <li><a href=custom-elements.html#custom-elements-intro><span
                                                                        class=secno>4.13.1</span> Introduction</a>
                                                        <ol>
                                                                <li><a href=custom-elements.html#custom-elements-autonomous-example><span
                                                                                        class=secno>4.13.1.1</span>
                                                                                Creating an autonomous custom
                                                                                element</a>
                                                                <li><a href=custom-elements.html#custom-elements-face-example><span
                                                                                        class=secno>4.13.1.2</span>
                                                                                Creating a form-associated custom
                                                                                element</a>
                                                                <li><a href=custom-elements.html#custom-elements-accessibility-example><span
                                                                                        class=secno>4.13.1.3</span>
                                                                                Creating a custom element with default
                                                                                accessible roles, states, and
                                                                                properties</a>
                                                                <li><a href=custom-elements.html#custom-elements-customized-builtin-example><span
                                                                                        class=secno>4.13.1.4</span>
                                                                                Creating a customized built-in
                                                                                element</a>
                                                                <li><a href=custom-elements.html#custom-elements-autonomous-drawbacks><span
                                                                                        class=secno>4.13.1.5</span>
                                                                                Drawbacks of autonomous custom
                                                                                elements</a>
                                                                <li><a href=custom-elements.html#custom-elements-upgrades-examples><span
                                                                                        class=secno>4.13.1.6</span>
                                                                                Upgrading elements after their
                                                                                creation</a>
                                                                <li><a href=custom-elements.html#exposing-custom-element-states><span
                                                                                        class=secno>4.13.1.7</span>
                                                                                Exposing custom element states</a>
                                                        </ol>
                                                <li><a href=custom-elements.html#custom-element-conformance><span
                                                                        class=secno>4.13.2</span> Requirements for
                                                                custom element constructors and
                                                                reactions</a>
                                                <li><a href=custom-elements.html#custom-elements-core-concepts><span
                                                                        class=secno>4.13.3</span> Core concepts</a>
                                                <li><a href=custom-elements.html#custom-elements-api><span
                                                                        class=secno>4.13.4</span> The
                                                                <code>CustomElementRegistry</code> interface</a>
                                                <li><a href=custom-elements.html#upgrades><span
                                                                        class=secno>4.13.5</span> Upgrades</a>
                                                <li><a href=custom-elements.html#custom-element-reactions><span
                                                                        class=secno>4.13.6</span> Custom element
                                                                reactions</a>
                                                <li><a href=custom-elements.html#element-internals><span
                                                                        class=secno>4.13.7</span> Element internals</a>
                                                        <ol>
                                                                <li><a href=custom-elements.html#the-elementinternals-interface><span
                                                                                        class=secno>4.13.7.1</span> The
                                                                                <code>ElementInternals</code>
                                                                                interface</a>
                                                                <li><a href=custom-elements.html#shadow-root-access><span
                                                                                        class=secno>4.13.7.2</span>
                                                                                Shadow root access</a>
                                                                <li><a href=custom-elements.html#form-associated-custom-elements><span
                                                                                        class=secno>4.13.7.3</span>
                                                                                Form-associated custom elements</a>
                                                                <li><a href=custom-elements.html#accessibility-semantics><span
                                                                                        class=secno>4.13.7.4</span>
                                                                                Accessibility semantics</a>
                                                                <li><a href=custom-elements.html#custom-state-pseudo-class><span
                                                                                        class=secno>4.13.7.5</span>
                                                                                Custom state pseudo-class</a>
                                                        </ol>
                                        </ol>
                                <li><a href=semantics-other.html#common-idioms><span class=secno>4.14</span> Common
                                                idioms without dedicated elements</a>
                                        <ol>
                                                <li><a href=semantics-other.html#rel-up><span class=secno>4.14.1</span>
                                                                Breadcrumb navigation</a>
                                                <li><a href=semantics-other.html#tag-clouds><span
                                                                        class=secno>4.14.2</span> Tag clouds</a>
                                                <li><a href=semantics-other.html#conversations><span
                                                                        class=secno>4.14.3</span> Conversations</a>
                                                <li><a href=semantics-other.html#footnotes><span
                                                                        class=secno>4.14.4</span> Footnotes</a>
                                        </ol>
                                <li><a href=semantics-other.html#disabled-elements><span class=secno>4.15</span>
                                                Disabled elements</a>
                                <li><a href=semantics-other.html#selectors><span class=secno>4.16</span> Matching HTML
                                                elements using selectors and CSS</a>
                                        <ol>
                                                <li><a href="semantics-other.html#case-sensitivity-of-the-css-'attr()'-function"><span
                                                                        class=secno>4.16.1</span> Case-sensitivity of
                                                                the CSS 'attr()' function</a>
                                                <li><a href=semantics-other.html#case-sensitivity-of-selectors><span
                                                                        class=secno>4.16.2</span> Case-sensitivity of
                                                                selectors</a>
                                                <li><a href=semantics-other.html#pseudo-classes><span
                                                                        class=secno>4.16.3</span> Pseudo-classes</a>
                                        </ol>
                        </ol>
                <li id=toc-microdata><a href=microdata.html#microdata><span class=secno>5</span> Microdata</a>
                        <ol>
                                <li><a href=microdata.html#introduction-7><span class=secno>5.1</span> Introduction</a>
                                        <ol>
                                                <li><a href=microdata.html#overview><span class=secno>5.1.1</span>
                                                                Overview</a>
                                                <li><a href=microdata.html#the-basic-syntax><span
                                                                        class=secno>5.1.2</span> The basic syntax</a>
                                                <li><a href=microdata.html#typed-items><span class=secno>5.1.3</span>
                                                                Typed items</a>
                                                <li><a href=microdata.html#global-identifiers-for-items><span
                                                                        class=secno>5.1.4</span> Global identifiers for
                                                                items</a>
                                                <li><a href=microdata.html#selecting-names-when-defining-vocabularies><span
                                                                        class=secno>5.1.5</span> Selecting names when
                                                                defining vocabularies</a>
                                        </ol>
                                <li><a href=microdata.html#encoding-microdata><span class=secno>5.2</span> Encoding
                                                microdata</a>
                                        <ol>
                                                <li><a href=microdata.html#the-microdata-model><span
                                                                        class=secno>5.2.1</span> The microdata model</a>
                                                <li><a href=microdata.html#items><span class=secno>5.2.2</span>
                                                                Items</a>
                                                <li><a href=microdata.html#names:-the-itemprop-attribute><span
                                                                        class=secno>5.2.3</span> Names: the
                                                                <code>itemprop</code> attribute</a>
                                                <li><a href=microdata.html#values><span class=secno>5.2.4</span>
                                                                Values</a>
                                                <li><a href=microdata.html#associating-names-with-items><span
                                                                        class=secno>5.2.5</span> Associating names with
                                                                items</a>
                                                <li><a href=microdata.html#microdata-and-other-namespaces><span
                                                                        class=secno>5.2.6</span> Microdata and other
                                                                namespaces</a>
                                        </ol>
                                <li><a href=microdata.html#mdvocabs><span class=secno>5.3</span> Sample microdata
                                                vocabularies</a>
                                        <ol>
                                                <li><a href=microdata.html#vcard><span class=secno>5.3.1</span>
                                                                vCard</a>
                                                        <ol>
                                                                <li><a href=microdata.html#conversion-to-vcard><span
                                                                                        class=secno>5.3.1.1</span>
                                                                                Conversion to vCard</a>
                                                                <li><a href=microdata.html#examples-2><span
                                                                                        class=secno>5.3.1.2</span>
                                                                                Examples</a>
                                                        </ol>
                                                <li><a href=microdata.html#vevent><span class=secno>5.3.2</span>
                                                                vEvent</a>
                                                        <ol>
                                                                <li><a href=microdata.html#conversion-to-icalendar><span
                                                                                        class=secno>5.3.2.1</span>
                                                                                Conversion to iCalendar</a>
                                                                <li><a href=microdata.html#examples-3><span
                                                                                        class=secno>5.3.2.2</span>
                                                                                Examples</a>
                                                        </ol>
                                                <li><a href=microdata.html#licensing-works><span
                                                                        class=secno>5.3.3</span> Licensing works</a>
                                                        <ol>
                                                                <li><a href=microdata.html#examples-4><span
                                                                                        class=secno>5.3.3.1</span>
                                                                                Examples</a>
                                                        </ol>
                                        </ol>
                                <li><a href=microdata.html#converting-html-to-other-formats><span class=secno>5.4</span>
                                                Converting HTML to other formats</a>
                                        <ol>
                                                <li><a href=microdata.html#json><span class=secno>5.4.1</span> JSON</a>
                                        </ol>
                        </ol>
                <li id=toc-editing><a href=interaction.html#editing><span class=secno>6</span> User interaction</a>
                        <ol>
                                <li><a href=interaction.html#the-hidden-attribute><span class=secno>6.1</span> The
                                                <code>hidden</code> attribute</a>
                                <li><a href=interaction.html#page-visibility><span class=secno>6.2</span> Page
                                                visibility</a>
                                        <ol>
                                                <li><a href=interaction.html#the-visibilitystateentry-interface><span
                                                                        class=secno>6.2.1</span> The
                                                                <code>VisibilityStateEntry</code> interface</a>
                                        </ol>
                                <li><a href=interaction.html#inert-subtrees><span class=secno>6.3</span> Inert
                                                subtrees</a>
                                        <ol>
                                                <li><a href=interaction.html#modal-dialogs-and-inert-subtrees><span
                                                                        class=secno>6.3.1</span> Modal dialogs and inert
                                                                subtrees</a>
                                                <li><a href=interaction.html#the-inert-attribute><span
                                                                        class=secno>6.3.2</span> The <code>inert</code>
                                                                attribute</a>
                                        </ol>
                                <li><a href=interaction.html#tracking-user-activation><span class=secno>6.4</span>
                                                Tracking user activation</a>
                                        <ol>
                                                <li><a href=interaction.html#user-activation-data-model><span
                                                                        class=secno>6.4.1</span> Data model</a>
                                                <li><a href=interaction.html#user-activation-processing-model><span
                                                                        class=secno>6.4.2</span> Processing model</a>
                                                <li><a href=interaction.html#user-activation-gated-apis><span
                                                                        class=secno>6.4.3</span> APIs gated by user
                                                                activation</a>
                                                <li><a href=interaction.html#the-useractivation-interface><span
                                                                        class=secno>6.4.4</span> The
                                                                <code>UserActivation</code> interface</a>
                                                <li><a href=interaction.html#user-activation-user-agent-automation><span
                                                                        class=secno>6.4.5</span> User agent
                                                                automation</a>
                                        </ol>
                                <li><a href=interaction.html#activation><span class=secno>6.5</span> Activation behavior
                                                of elements</a>
                                        <ol>
                                                <li><a href=interaction.html#the-toggleevent-interface><span
                                                                        class=secno>6.5.1</span> The
                                                                <code>ToggleEvent</code> interface</a>
                                        </ol>
                                <li><a href=interaction.html#focus><span class=secno>6.6</span> Focus</a>
                                        <ol>
                                                <li><a href=interaction.html#introduction-8><span
                                                                        class=secno>6.6.1</span> Introduction</a>
                                                <li><a href=interaction.html#data-model><span class=secno>6.6.2</span>
                                                                Data model</a>
                                                <li><a href=interaction.html#the-tabindex-attribute><span
                                                                        class=secno>6.6.3</span> The
                                                                <code>tabindex</code> attribute</a>
                                                <li><a href=interaction.html#focus-processing-model><span
                                                                        class=secno>6.6.4</span> Processing model</a>
                                                <li><a href=interaction.html#sequential-focus-navigation><span
                                                                        class=secno>6.6.5</span> Sequential focus
                                                                navigation</a>
                                                <li><a href=interaction.html#focus-management-apis><span
                                                                        class=secno>6.6.6</span> Focus management
                                                                APIs</a>
                                                <li><a href=interaction.html#the-autofocus-attribute><span
                                                                        class=secno>6.6.7</span> The
                                                                <code>autofocus</code> attribute</a>
                                        </ol>
                                <li><a href=interaction.html#assigning-keyboard-shortcuts><span class=secno>6.7</span>
                                                Assigning keyboard shortcuts</a>
                                        <ol>
                                                <li><a href=interaction.html#introduction-9><span
                                                                        class=secno>6.7.1</span> Introduction</a>
                                                <li><a href=interaction.html#the-accesskey-attribute><span
                                                                        class=secno>6.7.2</span> The
                                                                <code>accesskey</code>
                                                                attribute</a>
                                                <li><a href=interaction.html#keyboard-shortcuts-processing-model><span
                                                                        class=secno>6.7.3</span> Processing
                                                                model</a>
                                        </ol>
                                <li><a href=interaction.html#editing-2><span class=secno>6.8</span> Editing</a>
                                        <ol>
                                                <li><a href=interaction.html#contenteditable><span
                                                                        class=secno>6.8.1</span> Making document regions
                                                                editable: The <code>contenteditable</code> content
                                                                attribute</a>
                                                <li><a href=interaction.html#making-entire-documents-editable:-the-designmode-idl-attribute><span
                                                                        class=secno>6.8.2</span> Making entire documents
                                                                editable: the <code>designMode</code> getter and
                                                                setter</a>
                                                <li><a href=interaction.html#best-practices-for-in-page-editors><span
                                                                        class=secno>6.8.3</span> Best practices for
                                                                in-page editors</a>
                                                <li><a href=interaction.html#editing-apis><span class=secno>6.8.4</span>
                                                                Editing APIs</a>
                                                <li><a href=interaction.html#spelling-and-grammar-checking><span
                                                                        class=secno>6.8.5</span> Spelling and grammar
                                                                checking</a>
                                                <li><a href=interaction.html#autocapitalization><span
                                                                        class=secno>6.8.6</span> Autocapitalization</a>
                                                <li><a href=interaction.html#input-modalities:-the-inputmode-attribute><span
                                                                        class=secno>6.8.7</span> Input modalities: the
                                                                <code>inputmode</code> attribute</a>
                                                <li><a href=interaction.html#input-modalities:-the-enterkeyhint-attribute><span
                                                                        class=secno>6.8.8</span> Input modalities: the
                                                                <code>enterkeyhint</code>
                                                                attribute</a>
                                        </ol>
                                <li><a href=interaction.html#find-in-page><span class=secno>6.9</span> Find-in-page</a>
                                        <ol>
                                                <li><a href=interaction.html#introduction-10><span
                                                                        class=secno>6.9.1</span> Introduction</a>
                                                <li><a href="interaction.html#interaction-with-details-and-hidden=until-found"><span
                                                                        class=secno>6.9.2</span> Interaction with
                                                                <code>details</code> and
                                                                <code>hidden=until-found</code></a>
                                                <li><a href=interaction.html#interaction-with-selection><span
                                                                        class=secno>6.9.3</span> Interaction with
                                                                selection</a>
                                        </ol>
                                <li><a href=interaction.html#close-requests-and-close-watchers><span
                                                        class=secno>6.10</span> Close requests and close watchers</a>
                                        <ol>
                                                <li><a href=interaction.html#close-requests><span
                                                                        class=secno>6.10.1</span> Close requests</a>
                                                <li><a href=interaction.html#close-watcher-infrastructure><span
                                                                        class=secno>6.10.2</span> Close watcher
                                                                infrastructure</a>
                                                <li><a href=interaction.html#the-closewatcher-interface><span
                                                                        class=secno>6.10.3</span> The
                                                                <code>CloseWatcher</code> interface</a>
                                        </ol>
                                <li><a href=dnd.html#dnd><span class=secno>6.11</span> Drag and drop</a>
                                        <ol>
                                                <li><a href=dnd.html#event-drag><span class=secno>6.11.1</span>
                                                                Introduction</a>
                                                <li><a href=dnd.html#the-drag-data-store><span class=secno>6.11.2</span>
                                                                The drag data store</a>
                                                <li><a href=dnd.html#the-datatransfer-interface><span
                                                                        class=secno>6.11.3</span> The
                                                                <code>DataTransfer</code> interface</a>
                                                        <ol>
                                                                <li><a href=dnd.html#the-datatransferitemlist-interface><span
                                                                                        class=secno>6.11.3.1</span> The
                                                                                <code>DataTransferItemList</code>
                                                                                interface</a>
                                                                <li><a href=dnd.html#the-datatransferitem-interface><span
                                                                                        class=secno>6.11.3.2</span> The
                                                                                <code>DataTransferItem</code>
                                                                                interface</a>
                                                        </ol>
                                                <li><a href=dnd.html#the-dragevent-interface><span
                                                                        class=secno>6.11.4</span> The
                                                                <code>DragEvent</code> interface</a>
                                                <li><a href=dnd.html#drag-and-drop-processing-model><span
                                                                        class=secno>6.11.5</span> Processing model</a>
                                                <li><a href=dnd.html#dndevents><span class=secno>6.11.6</span> Events
                                                                summary</a>
                                                <li><a href=dnd.html#the-draggable-attribute><span
                                                                        class=secno>6.11.7</span> The
                                                                <code>draggable</code> attribute</a>
                                                <li><a href=dnd.html#security-risks-in-the-drag-and-drop-model><span
                                                                        class=secno>6.11.8</span> Security risks in the
                                                                drag-and-drop model</a>
                                        </ol>
                                <li><a href=popover.html#the-popover-attribute><span class=secno>6.12</span> The
                                                <code>popover</code> attribute</a>
                                        <ol>
                                                <li><a href=popover.html#the-popover-target-attributes><span
                                                                        class=secno>6.12.1</span> The popover target
                                                                attributes</a>
                                                <li><a href=popover.html#popover-light-dismiss><span
                                                                        class=secno>6.12.2</span> Popover light
                                                                dismiss</a>
                                        </ol>
                        </ol>
                <li id=toc-browsers><a href=browsers.html#browsers><span class=secno>7</span> Loading web pages</a>
                        <ol>
                                <li><a href=browsers.html#loading-web-pages-supporting-concepts><span
                                                        class=secno>7.1</span> Supporting concepts</a>
                                        <ol>
                                                <li><a href=browsers.html#origin><span class=secno>7.1.1</span>
                                                                Origins</a>
                                                        <ol>
                                                                <li><a href=browsers.html#sites><span
                                                                                        class=secno>7.1.1.1</span>
                                                                                Sites</a>
                                                                <li><a href=browsers.html#relaxing-the-same-origin-restriction><span
                                                                                        class=secno>7.1.1.2</span>
                                                                                Relaxing the same-origin restriction</a>
                                                        </ol>
                                                <li><a href=browsers.html#origin-keyed-agent-clusters><span
                                                                        class=secno>7.1.2</span> Origin-keyed agent
                                                                clusters</a>
                                                <li><a href=browsers.html#cross-origin-opener-policies><span
                                                                        class=secno>7.1.3</span> Cross-origin opener
                                                                policies</a>
                                                        <ol>
                                                                <li><a href=browsers.html#the-coop-headers><span
                                                                                        class=secno>7.1.3.1</span> The
                                                                                headers</a>
                                                                <li><a href=browsers.html#browsing-context-group-switches-due-to-cross-origin-opener-policy><span
                                                                                        class=secno>7.1.3.2</span>
                                                                                Browsing context group switches due to
                                                                                cross-origin opener policy</a>
                                                                <li><a href=browsers.html#coop-reporting><span
                                                                                        class=secno>7.1.3.3</span>
                                                                                Reporting</a>
                                                        </ol>
                                                <li><a href=browsers.html#coep><span class=secno>7.1.4</span>
                                                                Cross-origin embedder policies</a>
                                                        <ol>
                                                                <li><a href=browsers.html#the-coep-headers><span
                                                                                        class=secno>7.1.4.1</span> The
                                                                                headers</a>
                                                                <li><a href=browsers.html#embedder-policy-checks><span
                                                                                        class=secno>7.1.4.2</span>
                                                                                Embedder policy checks</a>
                                                        </ol>
                                                <li><a href=browsers.html#sandboxing><span class=secno>7.1.5</span>
                                                                Sandboxing</a>
                                                <li><a href=browsers.html#policy-containers><span
                                                                        class=secno>7.1.6</span> Policy containers</a>
                                        </ol>
                                <li><a href=nav-history-apis.html#nav-traversal-apis><span class=secno>7.2</span> APIs
                                                related to navigation and
                                                session history</a>
                                        <ol>
                                                <li><a href=nav-history-apis.html#cross-origin-objects><span
                                                                        class=secno>7.2.1</span> Security infrastructure
                                                                for <code>Window</code>,
                                                                <code>WindowProxy</code>, and <code>Location</code>
                                                                objects</a>
                                                        <ol>
                                                                <li><a href=nav-history-apis.html#integration-with-idl><span
                                                                                        class=secno>7.2.1.1</span>
                                                                                Integration with IDL</a>
                                                                <li><a href=nav-history-apis.html#shared-internal-slot:-crossoriginpropertydescriptormap><span
                                                                                        class=secno>7.2.1.2</span>
                                                                                Shared internal slot:
                                                                                [[CrossOriginPropertyDescriptorMap]]</a>
                                                                <li><a href=nav-history-apis.html#shared-abstract-operations><span
                                                                                        class=secno>7.2.1.3</span>
                                                                                Shared abstract operations</a>
                                                                        <ol>
                                                                                <li><a href=nav-history-apis.html#crossoriginproperties-(-o-)><span
                                                                                                        class=secno>7.2.1.3.1</span>
                                                                                                CrossOriginProperties (
                                                                                                <var>O</var> )</a>
                                                                                <li><a href=nav-history-apis.html#crossoriginpropertyfallback-(-p-)><span
                                                                                                        class=secno>7.2.1.3.2</span>
                                                                                                CrossOriginPropertyFallback
                                                                                                ( <var>P</var> )</a>
                                                                                <li><a href=nav-history-apis.html#isplatformobjectsameorigin-(-o-)><span
                                                                                                        class=secno>7.2.1.3.3</span>
                                                                                                IsPlatformObjectSameOrigin
                                                                                                ( <var>O</var> )</a>
                                                                                <li><a href=nav-history-apis.html#crossorigingetownpropertyhelper-(-o,-p-)><span
                                                                                                        class=secno>7.2.1.3.4</span>
                                                                                                CrossOriginGetOwnPropertyHelper
                                                                                                ( <var>O</var>,
                                                                                                <var>P</var> )</a>
                                                                                <li><a href=nav-history-apis.html#crossoriginget-(-o,-p,-receiver-)><span
                                                                                                        class=secno>7.2.1.3.5</span>
                                                                                                CrossOriginGet (
                                                                                                <var>O</var>,
                                                                                                <var>P</var>,
                                                                                                <var>Receiver</var>
                                                                                                )</a>
                                                                                <li><a href=nav-history-apis.html#crossoriginset-(-o,-p,-v,-receiver-)><span
                                                                                                        class=secno>7.2.1.3.6</span>
                                                                                                CrossOriginSet (
                                                                                                <var>O</var>,
                                                                                                <var>P</var>,
                                                                                                <var>V</var>,
                                                                                                <var>Receiver</var>
                                                                                                )</a>
                                                                                <li><a href=nav-history-apis.html#crossoriginownpropertykeys-(-o-)><span
                                                                                                        class=secno>7.2.1.3.7</span>
                                                                                                CrossOriginOwnPropertyKeys
                                                                                                ( <var>O</var> )</a>
                                                                        </ol>
                                                        </ol>
                                                <li><a href=nav-history-apis.html#the-window-object><span
                                                                        class=secno>7.2.2</span> The <code>Window</code>
                                                                object</a>
                                                        <ol>
                                                                <li><a href=nav-history-apis.html#apis-for-creating-and-navigating-browsing-contexts-by-name><span
                                                                                        class=secno>7.2.2.1</span>
                                                                                Opening and closing windows</a>
                                                                <li><a href=nav-history-apis.html#accessing-other-browsing-contexts><span
                                                                                        class=secno>7.2.2.2</span>
                                                                                Indexed access on the
                                                                                <code>Window</code> object</a>
                                                                <li><a href=nav-history-apis.html#named-access-on-the-window-object><span
                                                                                        class=secno>7.2.2.3</span> Named
                                                                                access on the <code>Window</code>
                                                                                object</a>
                                                                <li><a href=nav-history-apis.html#navigating-nested-browsing-contexts-in-the-dom><span
                                                                                        class=secno>7.2.2.4</span>
                                                                                Accessing related windows</a>
                                                                <li><a href=nav-history-apis.html#browser-interface-elements><span
                                                                                        class=secno>7.2.2.5</span>
                                                                                Historical browser interface element
                                                                                APIs</a>
                                                                <li><a href=nav-history-apis.html#script-settings-for-window-objects><span
                                                                                        class=secno>7.2.2.6</span>
                                                                                Script settings for <code>Window</code>
                                                                                objects</a>
                                                        </ol>
                                                <li><a href=nav-history-apis.html#the-windowproxy-exotic-object><span
                                                                        class=secno>7.2.3</span> The
                                                                <code>WindowProxy</code> exotic object</a>
                                                        <ol>
                                                                <li><a href=nav-history-apis.html#windowproxy-getprototypeof><span
                                                                                        class=secno>7.2.3.1</span>
                                                                                [[GetPrototypeOf]] ( )</a>
                                                                <li><a href=nav-history-apis.html#windowproxy-setprototypeof><span
                                                                                        class=secno>7.2.3.2</span>
                                                                                [[SetPrototypeOf]] ( <var>V</var> )</a>
                                                                <li><a href=nav-history-apis.html#windowproxy-isextensible><span
                                                                                        class=secno>7.2.3.3</span>
                                                                                [[IsExtensible]] ( )</a>
                                                                <li><a href=nav-history-apis.html#windowproxy-preventextensions><span
                                                                                        class=secno>7.2.3.4</span>
                                                                                [[PreventExtensions]] ( )</a>
                                                                <li><a href=nav-history-apis.html#windowproxy-getownproperty><span
                                                                                        class=secno>7.2.3.5</span>
                                                                                [[GetOwnProperty]] ( <var>P</var> )</a>
                                                                <li><a href=nav-history-apis.html#windowproxy-defineownproperty><span
                                                                                        class=secno>7.2.3.6</span>
                                                                                [[DefineOwnProperty]] ( <var>P</var>,
                                                                                <var>Desc</var>
                                                                                )</a>
                                                                <li><a href=nav-history-apis.html#windowproxy-get><span
                                                                                        class=secno>7.2.3.7</span>
                                                                                [[Get]] ( <var>P</var>,
                                                                                <var>Receiver</var> )</a>
                                                                <li><a href=nav-history-apis.html#windowproxy-set><span
                                                                                        class=secno>7.2.3.8</span>
                                                                                [[Set]] ( <var>P</var>, <var>V</var>,
                                                                                <var>Receiver</var> )</a>
                                                                <li><a href=nav-history-apis.html#windowproxy-delete><span
                                                                                        class=secno>7.2.3.9</span>
                                                                                [[Delete]] ( <var>P</var> )</a>
                                                                <li><a href=nav-history-apis.html#windowproxy-ownpropertykeys><span
                                                                                        class=secno>7.2.3.10</span>
                                                                                [[OwnPropertyKeys]] ( )</a>
                                                        </ol>
                                                <li><a href=nav-history-apis.html#the-location-interface><span
                                                                        class=secno>7.2.4</span> The
                                                                <code>Location</code> interface</a>
                                                        <ol>
                                                                <li><a href=nav-history-apis.html#location-getprototypeof><span
                                                                                        class=secno>7.2.4.1</span>
                                                                                [[GetPrototypeOf]] ( )</a>
                                                                <li><a href=nav-history-apis.html#location-setprototypeof><span
                                                                                        class=secno>7.2.4.2</span>
                                                                                [[SetPrototypeOf]] ( <var>V</var> )</a>
                                                                <li><a href=nav-history-apis.html#location-isextensible><span
                                                                                        class=secno>7.2.4.3</span>
                                                                                [[IsExtensible]] ( )</a>
                                                                <li><a href=nav-history-apis.html#location-preventextensions><span
                                                                                        class=secno>7.2.4.4</span>
                                                                                [[PreventExtensions]] ( )</a>
                                                                <li><a href=nav-history-apis.html#location-getownproperty><span
                                                                                        class=secno>7.2.4.5</span>
                                                                                [[GetOwnProperty]] ( <var>P</var> )</a>
                                                                <li><a href=nav-history-apis.html#location-defineownproperty><span
                                                                                        class=secno>7.2.4.6</span>
                                                                                [[DefineOwnProperty]] ( <var>P</var>,
                                                                                <var>Desc</var> )</a>
                                                                <li><a href=nav-history-apis.html#location-get><span
                                                                                        class=secno>7.2.4.7</span>
                                                                                [[Get]] ( <var>P</var>,
                                                                                <var>Receiver</var> )</a>
                                                                <li><a href=nav-history-apis.html#location-set><span
                                                                                        class=secno>7.2.4.8</span>
                                                                                [[Set]] ( <var>P</var>, <var>V</var>,
                                                                                <var>Receiver</var> )</a>
                                                                <li><a href=nav-history-apis.html#location-delete><span
                                                                                        class=secno>7.2.4.9</span>
                                                                                [[Delete]] ( <var>P</var> )</a>
                                                                <li><a href=nav-history-apis.html#location-ownpropertykeys><span
                                                                                        class=secno>7.2.4.10</span>
                                                                                [[OwnPropertyKeys]] ( )</a>
                                                        </ol>
                                                <li><a href=nav-history-apis.html#the-history-interface><span
                                                                        class=secno>7.2.5</span> The
                                                                <code>History</code> interface</a>
                                                <li><a href=nav-history-apis.html#navigation-api><span
                                                                        class=secno>7.2.6</span> The navigation API</a>
                                                        <ol>
                                                                <li><a href=nav-history-apis.html#navigation-api-intro><span
                                                                                        class=secno>7.2.6.1</span>
                                                                                Introduction</a>
                                                                <li><a href=nav-history-apis.html#navigation-interface><span
                                                                                        class=secno>7.2.6.2</span> The
                                                                                <code>Navigation</code> interface</a>
                                                                <li><a href=nav-history-apis.html#navigation-api-core><span
                                                                                        class=secno>7.2.6.3</span> Core
                                                                                infrastructure</a>
                                                                <li><a href=nav-history-apis.html#navigation-api-entry-updates><span
                                                                                        class=secno>7.2.6.4</span>
                                                                                Initializing and updating the entry
                                                                                list</a>
                                                                <li><a href=nav-history-apis.html#the-navigationhistoryentry-interface><span
                                                                                        class=secno>7.2.6.5</span> The
                                                                                <code>NavigationHistoryEntry</code>
                                                                                interface</a>
                                                                <li><a href=nav-history-apis.html#the-history-entry-list><span
                                                                                        class=secno>7.2.6.6</span> The
                                                                                history entry list</a>
                                                                <li><a href=nav-history-apis.html#navigation-api-initiating-navigations><span
                                                                                        class=secno>7.2.6.7</span>
                                                                                Initiating navigations</a>
                                                                <li><a href=nav-history-apis.html#ongoing-navigation-tracking><span
                                                                                        class=secno>7.2.6.8</span>
                                                                                Ongoing navigation tracking</a>
                                                                <li><a href=nav-history-apis.html#navigation-activation-interface><span
                                                                                        class=secno>7.2.6.9</span> The
                                                                                <code>NavigationActivation</code>
                                                                                interface</a>
                                                                <li><a href=nav-history-apis.html#the-navigate-event><span
                                                                                        class=secno>7.2.6.10</span> The
                                                                                <code>navigate</code> event</a>
                                                                        <ol>
                                                                                <li><a href=nav-history-apis.html#the-navigateevent-interface><span
                                                                                                        class=secno>7.2.6.10.1</span>
                                                                                                The
                                                                                                <code>NavigateEvent</code>
                                                                                                interface</a>
                                                                                <li><a href=nav-history-apis.html#the-navigationdestination-interface><span
                                                                                                        class=secno>7.2.6.10.2</span>
                                                                                                The
                                                                                                <code>NavigationDestination</code>
                                                                                                interface</a>
                                                                                <li><a href=nav-history-apis.html#navigate-event-firing><span
                                                                                                        class=secno>7.2.6.10.3</span>
                                                                                                Firing the event</a>
                                                                                <li><a href=nav-history-apis.html#navigate-event-scroll-focus><span
                                                                                                        class=secno>7.2.6.10.4</span>
                                                                                                Scroll and focus
                                                                                                behavior</a>
                                                                        </ol>
                                                        </ol>
                                                <li><a href=nav-history-apis.html#nav-traversal-event-interfaces><span
                                                                        class=secno>7.2.7</span> Event interfaces</a>
                                                        <ol>
                                                                <li><a href=nav-history-apis.html#the-navigationcurrententrychangeevent-interface><span
                                                                                        class=secno>7.2.7.1</span> The
                                                                                <code>NavigationCurrentEntryChangeEvent</code>
                                                                                interface</a>
                                                                <li><a href=nav-history-apis.html#the-popstateevent-interface><span
                                                                                        class=secno>7.2.7.2</span> The
                                                                                <code>PopStateEvent</code> interface</a>
                                                                <li><a href=nav-history-apis.html#the-hashchangeevent-interface><span
                                                                                        class=secno>7.2.7.3</span> The
                                                                                <code>HashChangeEvent</code>
                                                                                interface</a>
                                                                <li><a href=nav-history-apis.html#the-pagerevealevent-interface><span
                                                                                        class=secno>7.2.7.4</span> The
                                                                                <code>PageRevealEvent</code>
                                                                                interface</a>
                                                                <li><a href=nav-history-apis.html#the-pagetransitionevent-interface><span
                                                                                        class=secno>7.2.7.5</span> The
                                                                                <code>PageTransitionEvent</code>
                                                                                interface</a>
                                                                <li><a href=nav-history-apis.html#the-beforeunloadevent-interface><span
                                                                                        class=secno>7.2.7.6</span> The
                                                                                <code>BeforeUnloadEvent</code>
                                                                                interface</a>
                                                        </ol>
                                        </ol>
                                <li><a href=document-sequences.html#infrastructure-for-sequences-of-documents><span
                                                        class=secno>7.3</span> Infrastructure for sequences of
                                                documents</a>
                                        <ol>
                                                <li><a href=document-sequences.html#navigables><span
                                                                        class=secno>7.3.1</span> Navigables</a>
                                                        <ol>
                                                                <li><a href=document-sequences.html#traversable-navigables><span
                                                                                        class=secno>7.3.1.1</span>
                                                                                Traversable navigables</a>
                                                                <li><a href=document-sequences.html#top-level-traversables><span
                                                                                        class=secno>7.3.1.2</span>
                                                                                Top-level traversables</a>
                                                                <li><a href=document-sequences.html#child-navigables><span
                                                                                        class=secno>7.3.1.3</span> Child
                                                                                navigables</a>
                                                                <li><a href=document-sequences.html#jake-diagrams><span
                                                                                        class=secno>7.3.1.4</span> Jake
                                                                                diagrams</a>
                                                                <li><a href=document-sequences.html#related-navigable-collections><span
                                                                                        class=secno>7.3.1.5</span>
                                                                                Related navigable collections</a>
                                                                <li><a href=document-sequences.html#garbage-collection-and-browsing-contexts><span
                                                                                        class=secno>7.3.1.6</span>
                                                                                Navigable destruction</a>
                                                                <li><a href=document-sequences.html#navigable-target-names><span
                                                                                        class=secno>7.3.1.7</span>
                                                                                Navigable target names</a>
                                                        </ol>
                                                <li><a href=document-sequences.html#windows><span
                                                                        class=secno>7.3.2</span> Browsing contexts</a>
                                                        <ol>
                                                                <li><a href=document-sequences.html#creating-browsing-contexts><span
                                                                                        class=secno>7.3.2.1</span>
                                                                                Creating browsing contexts</a>
                                                                <li><a href=document-sequences.html#nested-browsing-contexts><span
                                                                                        class=secno>7.3.2.2</span>
                                                                                Related browsing contexts</a>
                                                                <li><a href=document-sequences.html#groupings-of-browsing-contexts><span
                                                                                        class=secno>7.3.2.3</span>
                                                                                Groupings of browsing contexts</a>
                                                        </ol>
                                                <li><a href=document-sequences.html#fully-active-documents><span
                                                                        class=secno>7.3.3</span> Fully active
                                                                documents</a>
                                        </ol>
                                <li><a href=browsing-the-web.html#navigation-and-session-history><span
                                                        class=secno>7.4</span> Navigation and session
                                                history</a>
                                        <ol>
                                                <li><a href=browsing-the-web.html#session-history-infrastructure><span
                                                                        class=secno>7.4.1</span> Session history</a>
                                                        <ol>
                                                                <li><a href=browsing-the-web.html#session-history-entries><span
                                                                                        class=secno>7.4.1.1</span>
                                                                                Session history entries</a>
                                                                <li><a href=browsing-the-web.html#document-state><span
                                                                                        class=secno>7.4.1.2</span>
                                                                                Document state</a>
                                                                <li><a href=browsing-the-web.html#centralized-modifications-of-session-history><span
                                                                                        class=secno>7.4.1.3</span>
                                                                                Centralized modifications of session
                                                                                history</a>
                                                                <li><a href=browsing-the-web.html#low-level-operations-on-session-history><span
                                                                                        class=secno>7.4.1.4</span>
                                                                                Low-level operations on session
                                                                                history</a>
                                                        </ol>
                                                <li><a href=browsing-the-web.html#navigating-across-documents><span
                                                                        class=secno>7.4.2</span> Navigation</a>
                                                        <ol>
                                                                <li><a href=browsing-the-web.html#navigation-supporting-concepts><span
                                                                                        class=secno>7.4.2.1</span>
                                                                                Supporting concepts</a>
                                                                <li><a href=browsing-the-web.html#beginning-navigation><span
                                                                                        class=secno>7.4.2.2</span>
                                                                                Beginning navigation</a>
                                                                <li><a href=browsing-the-web.html#ending-navigation><span
                                                                                        class=secno>7.4.2.3</span>
                                                                                Ending navigation</a>
                                                                        <ol>
                                                                                <li><a href=browsing-the-web.html#the-usual-cross-document-navigation-case><span
                                                                                                        class=secno>7.4.2.3.1</span>
                                                                                                The usual cross-document
                                                                                                navigation case</a>
                                                                                <li><a href=browsing-the-web.html#the-javascript:-url-special-case><span
                                                                                                        class=secno>7.4.2.3.2</span>
                                                                                                The
                                                                                                <code>javascript:</code>
                                                                                                URL special case</a>
                                                                                <li><a href=browsing-the-web.html#scroll-to-fragid><span
                                                                                                        class=secno>7.4.2.3.3</span>
                                                                                                Fragment navigations</a>
                                                                                <li><a href=browsing-the-web.html#non-fetch-schemes-and-external-software><span
                                                                                                        class=secno>7.4.2.3.4</span>
                                                                                                Non-fetch schemes and
                                                                                                external software</a>
                                                                        </ol>
                                                                <li><a href=browsing-the-web.html#preventing-navigation><span
                                                                                        class=secno>7.4.2.4</span>
                                                                                Preventing navigation</a>
                                                                <li><a href=browsing-the-web.html#aborting-navigation><span
                                                                                        class=secno>7.4.2.5</span>
                                                                                Aborting navigation</a>
                                                        </ol>
                                                <li><a href=browsing-the-web.html#reloading-and-traversing><span
                                                                        class=secno>7.4.3</span> Reloading and
                                                                traversing</a>
                                                <li><a href=browsing-the-web.html#navigate-non-frag-sync><span
                                                                        class=secno>7.4.4</span> Non-fragment
                                                                synchronous "navigations"</a>
                                                <li><a href=browsing-the-web.html#populating-a-session-history-entry><span
                                                                        class=secno>7.4.5</span> Populating a session
                                                                history entry</a>
                                                <li><a href=browsing-the-web.html#applying-the-history-step><span
                                                                        class=secno>7.4.6</span> Applying the history
                                                                step</a>
                                                        <ol>
                                                                <li><a href=browsing-the-web.html#updating-the-traversable><span
                                                                                        class=secno>7.4.6.1</span>
                                                                                Updating the traversable</a>
                                                                <li><a href=browsing-the-web.html#updating-the-document><span
                                                                                        class=secno>7.4.6.2</span>
                                                                                Updating the document</a>
                                                                <li><a href=browsing-the-web.html#revealing-the-document><span
                                                                                        class=secno>7.4.6.3</span>
                                                                                Revealing the document</a>
                                                                <li><a href=browsing-the-web.html#scrolling-to-a-fragment><span
                                                                                        class=secno>7.4.6.4</span>
                                                                                Scrolling to a fragment</a>
                                                                <li><a href=browsing-the-web.html#persisted-user-state-restoration><span
                                                                                        class=secno>7.4.6.5</span>
                                                                                Persisted history entry state</a>
                                                        </ol>
                                        </ol>
                                <li><a href=document-lifecycle.html#document-lifecycle><span class=secno>7.5</span>
                                                Document lifecycle</a>
                                        <ol>
                                                <li><a href=document-lifecycle.html#shared-document-creation-infrastructure><span
                                                                        class=secno>7.5.1</span> Shared document
                                                                creation infrastructure</a>
                                                <li><a href=document-lifecycle.html#read-html><span
                                                                        class=secno>7.5.2</span> Loading HTML
                                                                documents</a>
                                                <li><a href=document-lifecycle.html#read-xml><span
                                                                        class=secno>7.5.3</span> Loading XML
                                                                documents</a>
                                                <li><a href=document-lifecycle.html#read-text><span
                                                                        class=secno>7.5.4</span> Loading text
                                                                documents</a>
                                                <li><a href=document-lifecycle.html#read-multipart-x-mixed-replace><span
                                                                        class=secno>7.5.5</span> Loading
                                                                <code>multipart/x-mixed-replace</code>
                                                                documents</a>
                                                <li><a href=document-lifecycle.html#read-media><span
                                                                        class=secno>7.5.6</span> Loading media
                                                                documents</a>
                                                <li><a href=document-lifecycle.html#read-ua-inline><span
                                                                        class=secno>7.5.7</span> Loading a document for
                                                                inline content that doesn't have a
                                                                DOM</a>
                                                <li><a href=document-lifecycle.html#loading-documents><span
                                                                        class=secno>7.5.8</span> Finishing the loading
                                                                process</a>
                                                <li><a href=document-lifecycle.html#unloading-documents><span
                                                                        class=secno>7.5.9</span> Unloading documents</a>
                                                <li><a href=document-lifecycle.html#destroying-documents><span
                                                                        class=secno>7.5.10</span> Destroying
                                                                documents</a>
                                                <li><a href=document-lifecycle.html#aborting-a-document-load><span
                                                                        class=secno>7.5.11</span> Aborting a document
                                                                load</a>
                                        </ol>
                                <li><a href=document-lifecycle.html#the-x-frame-options-header><span
                                                        class=secno>7.6</span> The header</a>
                                <li><a href=document-lifecycle.html#nav-traversal-ui><span class=secno>7.8</span>
                                                Browser user interface
                                                considerations</a>
                        </ol>
                <li id=toc-webappapis><a href=webappapis.html#webappapis><span class=secno>8</span> Web application
                                APIs</a>
                        <ol>
                                <li><a href=webappapis.html#scripting><span class=secno>8.1</span> Scripting</a>
                                        <ol>
                                                <li><a href=webappapis.html#introduction-11><span
                                                                        class=secno>8.1.1</span> Introduction</a>
                                                <li><a href=webappapis.html#agents-and-agent-clusters><span
                                                                        class=secno>8.1.2</span> Agents and agent
                                                                clusters</a>
                                                        <ol>
                                                                <li><a href=webappapis.html#integration-with-the-javascript-agent-formalism><span
                                                                                        class=secno>8.1.2.1</span>
                                                                                Integration with the JavaScript agent
                                                                                formalism</a>
                                                                <li><a href=webappapis.html#integration-with-the-javascript-agent-cluster-formalism><span
                                                                                        class=secno>8.1.2.2</span>
                                                                                Integration with the JavaScript agent
                                                                                cluster formalism</a>
                                                        </ol>
                                                <li><a href=webappapis.html#realms-and-their-counterparts><span
                                                                        class=secno>8.1.3</span> Realms and their
                                                                counterparts</a>
                                                        <ol>
                                                                <li><a href=webappapis.html#environments><span
                                                                                        class=secno>8.1.3.1</span>
                                                                                Environments</a>
                                                                <li><a href=webappapis.html#environment-settings-objects><span
                                                                                        class=secno>8.1.3.2</span>
                                                                                Environment settings objects</a>
                                                                <li><a href=webappapis.html#realms-settings-objects-global-objects><span
                                                                                        class=secno>8.1.3.3</span>
                                                                                Realms, settings objects, and global
                                                                                objects</a>
                                                                        <ol>
                                                                                <li><a href=webappapis.html#entry><span
                                                                                                        class=secno>8.1.3.3.1</span>
                                                                                                Entry</a>
                                                                                <li><a href=webappapis.html#incumbent><span
                                                                                                        class=secno>8.1.3.3.2</span>
                                                                                                Incumbent</a>
                                                                                <li><a href=webappapis.html#current><span
                                                                                                        class=secno>8.1.3.3.3</span>
                                                                                                Current</a>
                                                                                <li><a href=webappapis.html#relevant><span
                                                                                                        class=secno>8.1.3.3.4</span>
                                                                                                Relevant</a>
                                                                        </ol>
                                                                <li><a href=webappapis.html#enabling-and-disabling-scripting><span
                                                                                        class=secno>8.1.3.4</span>
                                                                                Enabling and disabling scripting</a>
                                                                <li><a href=webappapis.html#secure-contexts><span
                                                                                        class=secno>8.1.3.5</span>
                                                                                Secure contexts</a>
                                                        </ol>
                                                <li><a href=webappapis.html#scripting-processing-model><span
                                                                        class=secno>8.1.4</span> Script processing
                                                                model</a>
                                                        <ol>
                                                                <li><a href=webappapis.html#script-structs><span
                                                                                        class=secno>8.1.4.1</span>
                                                                                Scripts</a>
                                                                <li><a href=webappapis.html#fetching-scripts><span
                                                                                        class=secno>8.1.4.2</span>
                                                                                Fetching scripts</a>
                                                                <li><a href=webappapis.html#creating-scripts><span
                                                                                        class=secno>8.1.4.3</span>
                                                                                Creating scripts</a>
                                                                <li><a href=webappapis.html#calling-scripts><span
                                                                                        class=secno>8.1.4.4</span>
                                                                                Calling scripts</a>
                                                                <li><a href=webappapis.html#killing-scripts><span
                                                                                        class=secno>8.1.4.5</span>
                                                                                Killing scripts</a>
                                                                <li><a href=webappapis.html#runtime-script-errors><span
                                                                                        class=secno>8.1.4.6</span>
                                                                                Runtime script errors</a>
                                                                <li><a href=webappapis.html#unhandled-promise-rejections><span
                                                                                        class=secno>8.1.4.7</span>
                                                                                Unhandled promise rejections</a>
                                                                <li><a href=webappapis.html#import-map-parse-results><span
                                                                                        class=secno>8.1.4.8</span>
                                                                                Import map parse results</a>
                                                        </ol>
                                                <li><a href=webappapis.html#module-specifier-resolution><span
                                                                        class=secno>8.1.5</span> Module specifier
                                                                resolution</a>
                                                        <ol>
                                                                <li><a href=webappapis.html#the-resolution-algorithm><span
                                                                                        class=secno>8.1.5.1</span> The
                                                                                resolution algorithm</a>
                                                                <li><a href=webappapis.html#import-maps><span
                                                                                        class=secno>8.1.5.2</span>
                                                                                Import maps</a>
                                                                <li><a href=webappapis.html#import-map-processing-model><span
                                                                                        class=secno>8.1.5.3</span>
                                                                                Import map processing model</a>
                                                        </ol>
                                                <li><a href=webappapis.html#javascript-specification-host-hooks><span
                                                                        class=secno>8.1.6</span> JavaScript
                                                                specification host hooks</a>
                                                        <ol>
                                                                <li><a href=webappapis.html#the-hostensurecanaddprivateelement-implementation><span
                                                                                        class=secno>8.1.6.1</span>
                                                                                HostEnsureCanAddPrivateElement(<var>O</var>)</a>
                                                                <li><a href=webappapis.html#hostensurecancompilestrings(realm)><span
                                                                                        class=secno>8.1.6.2</span>
                                                                                HostEnsureCanCompileStrings(<var>realm</var>)</a>
                                                                <li><a href=webappapis.html#the-hostpromiserejectiontracker-implementation><span
                                                                                        class=secno>8.1.6.3</span>
                                                                                HostPromiseRejectionTracker(<var>promise</var>,
                                                                                <var>operation</var>)</a>
                                                                <li><a href=webappapis.html#integration-with-javascript-jobs><span
                                                                                        class=secno>8.1.6.4</span>
                                                                                Job-related host hooks</a>
                                                                        <ol>
                                                                                <li><a href=webappapis.html#hostcalljobcallback><span
                                                                                                        class=secno>8.1.6.4.1</span>
                                                                                                HostCallJobCallback(<var>callback</var>,
                                                                                                <var>V</var>,
                                                                                                <var>argumentsList</var>)</a>
                                                                                <li><a href=webappapis.html#hostenqueuefinalizationregistrycleanupjob><span
                                                                                                        class=secno>8.1.6.4.2</span>
                                                                                                HostEnqueueFinalizationRegistryCleanupJob(<var>finalizationRegistry</var>)</a>
                                                                                <li><a href=webappapis.html#hostenqueuegenericjob><span
                                                                                                        class=secno>8.1.6.4.3</span>
                                                                                                HostEnqueueGenericJob(<var>job</var>,
                                                                                                <var>realm</var>)</a>
                                                                                <li><a href=webappapis.html#hostenqueuepromisejob><span
                                                                                                        class=secno>8.1.6.4.4</span>
                                                                                                HostEnqueuePromiseJob(<var>job</var>,
                                                                                                <var>realm</var>)</a>
                                                                                <li><a href=webappapis.html#hostenqueuetimeoutjob><span
                                                                                                        class=secno>8.1.6.4.5</span>
                                                                                                HostEnqueueTimeoutJob(<var>job</var>,
                                                                                                <var>realm</var>,
                                                                                                <var>milliseconds</var>)</a>
                                                                                <li><a href=webappapis.html#hostmakejobcallback><span
                                                                                                        class=secno>8.1.6.4.6</span>
                                                                                                HostMakeJobCallback(<var>callable</var>)</a>
                                                                        </ol>
                                                                <li><a href=webappapis.html#integration-with-the-javascript-module-system><span
                                                                                        class=secno>8.1.6.5</span>
                                                                                Module-related host hooks</a>
                                                                        <ol>
                                                                                <li><a href=webappapis.html#hostgetimportmetaproperties><span
                                                                                                        class=secno>8.1.6.5.1</span>
                                                                                                HostGetImportMetaProperties(<var>moduleRecord</var>)</a>
                                                                                <li><a href=webappapis.html#hostgetsupportedimportattributes><span
                                                                                                        class=secno>8.1.6.5.2</span>
                                                                                                HostGetSupportedImportAttributes()</a>
                                                                                <li><a href=webappapis.html#hostloadimportedmodule><span
                                                                                                        class=secno>8.1.6.5.3</span>
                                                                                                HostLoadImportedModule(<var>referrer</var>,
                                                                                                <var>moduleRequest</var>,
                                                                                                <var>loadState</var>,
                                                                                                <var>payload</var>)</a>
                                                                        </ol>
                                                        </ol>
                                                <li><a href=webappapis.html#event-loops><span class=secno>8.1.7</span>
                                                                Event loops</a>
                                                        <ol>
                                                                <li><a href=webappapis.html#definitions-3><span
                                                                                        class=secno>8.1.7.1</span>
                                                                                Definitions</a>
                                                                <li><a href=webappapis.html#queuing-tasks><span
                                                                                        class=secno>8.1.7.2</span>
                                                                                Queuing tasks</a>
                                                                <li><a href=webappapis.html#event-loop-processing-model><span
                                                                                        class=secno>8.1.7.3</span>
                                                                                Processing model</a>
                                                                <li><a href=webappapis.html#generic-task-sources><span
                                                                                        class=secno>8.1.7.4</span>
                                                                                Generic task sources</a>
                                                                <li><a href=webappapis.html#event-loop-for-spec-authors><span
                                                                                        class=secno>8.1.7.5</span>
                                                                                Dealing with the event loop from other
                                                                                specifications</a>
                                                        </ol>
                                                <li><a href=webappapis.html#events><span class=secno>8.1.8</span>
                                                                Events</a>
                                                        <ol>
                                                                <li><a href=webappapis.html#event-handler-attributes><span
                                                                                        class=secno>8.1.8.1</span> Event
                                                                                handlers</a>
                                                                <li><a href=webappapis.html#event-handlers-on-elements,-document-objects,-and-window-objects><span
                                                                                        class=secno>8.1.8.2</span> Event
                                                                                handlers on elements,
                                                                                <code>Document</code> objects, and
                                                                                <code>Window</code> objects</a>
                                                                        <ol>
                                                                                <li><a href=webappapis.html#idl-definitions><span
                                                                                                        class=secno>8.1.8.2.1</span>
                                                                                                IDL definitions</a>
                                                                        </ol>
                                                                <li><a href=webappapis.html#event-firing><span
                                                                                        class=secno>8.1.8.3</span> Event
                                                                                firing</a>
                                                        </ol>
                                        </ol>
                                <li><a href=webappapis.html#windoworworkerglobalscope-mixin><span class=secno>8.2</span>
                                                The <code>WindowOrWorkerGlobalScope</code> mixin</a>
                                <li><a href=webappapis.html#atob><span class=secno>8.3</span> Base64 utility methods</a>
                                <li><a href=dynamic-markup-insertion.html#dynamic-markup-insertion><span
                                                        class=secno>8.4</span> Dynamic markup insertion</a>
                                        <ol>
                                                <li><a href=dynamic-markup-insertion.html#opening-the-input-stream><span
                                                                        class=secno>8.4.1</span> Opening the input
                                                                stream</a>
                                                <li><a href=dynamic-markup-insertion.html#closing-the-input-stream><span
                                                                        class=secno>8.4.2</span> Closing the input
                                                                stream</a>
                                                <li><a href=dynamic-markup-insertion.html#document.write()><span
                                                                        class=secno>8.4.3</span>
                                                                <code>document.write()</code></a>
                                                <li><a href=dynamic-markup-insertion.html#document.writeln()><span
                                                                        class=secno>8.4.4</span>
                                                                <code>document.writeln()</code></a>
                                        </ol>
                                <li><a href=dynamic-markup-insertion.html#dom-parsing-and-serialization><span
                                                        class=secno>8.5</span> DOM parsing</a>
                                        <ol>
                                                <li><a href=dynamic-markup-insertion.html#the-domparser-interface><span
                                                                        class=secno>8.5.1</span> The
                                                                <code>DOMParser</code> interface</a>
                                                <li><a href=dynamic-markup-insertion.html#unsafe-html-parsing-methods><span
                                                                        class=secno>8.5.2</span> Unsafe HTML parsing
                                                                methods</a>
                                        </ol>
                                <li><a href=timers-and-user-prompts.html#timers><span class=secno>8.6</span> Timers</a>
                                <li><a href=timers-and-user-prompts.html#microtask-queuing><span class=secno>8.7</span>
                                                Microtask queuing</a>
                                <li><a href=timers-and-user-prompts.html#user-prompts><span class=secno>8.8</span> User
                                                prompts</a>
                                        <ol>
                                                <li><a href=timers-and-user-prompts.html#simple-dialogs><span
                                                                        class=secno>8.8.1</span> Simple dialogs</a>
                                                <li><a href=timers-and-user-prompts.html#printing><span
                                                                        class=secno>8.8.2</span> Printing</a>
                                        </ol>
                                <li><a href=system-state.html#system-state-and-capabilities><span class=secno>8.9</span>
                                                System state and capabilities</a>
                                        <ol>
                                                <li><a href=system-state.html#the-navigator-object><span
                                                                        class=secno>8.9.1</span> The
                                                                <code>Navigator</code> object</a>
                                                        <ol>
                                                                <li><a href=system-state.html#client-identification><span
                                                                                        class=secno>8.9.1.1</span>
                                                                                Client identification</a>
                                                                <li><a href=system-state.html#language-preferences><span
                                                                                        class=secno>8.9.1.2</span>
                                                                                Language preferences</a>
                                                                <li><a href=system-state.html#navigator.online><span
                                                                                        class=secno>8.9.1.3</span>
                                                                                Browser state</a>
                                                                <li><a href=system-state.html#custom-handlers><span
                                                                                        class=secno>8.9.1.4</span>
                                                                                Custom scheme handlers: the
                                                                                <code>registerProtocolHandler()</code>
                                                                                method</a>
                                                                        <ol>
                                                                                <li><a href=system-state.html#security-and-privacy><span
                                                                                                        class=secno>8.9.1.4.1</span>
                                                                                                Security and privacy</a>
                                                                                <li><a href=system-state.html#user-agent-automation><span
                                                                                                        class=secno>8.9.1.4.2</span>
                                                                                                User agent
                                                                                                automation</a>
                                                                        </ol>
                                                                <li><a href=system-state.html#cookies><span
                                                                                        class=secno>8.9.1.5</span>
                                                                                Cookies</a>
                                                                <li><a href=system-state.html#pdf-viewing-support><span
                                                                                        class=secno>8.9.1.6</span> PDF
                                                                                viewing support</a>
                                                        </ol>
                                        </ol>
                                <li><a href=imagebitmap-and-animations.html#images-2><span class=secno>8.10</span>
                                                Images</a>
                                <li><a href=imagebitmap-and-animations.html#animation-frames><span
                                                        class=secno>8.11</span> Animation frames</a>
                        </ol>
                <li id=toc-comms><a href=comms.html#comms><span class=secno>9</span> Communication</a>
                        <ol>
                                <li><a href=comms.html#the-messageevent-interface><span class=secno>9.1</span> The
                                                <code>MessageEvent</code> interface</a>
                                <li><a href=server-sent-events.html#server-sent-events><span class=secno>9.2</span>
                                                Server-sent events</a>
                                        <ol>
                                                <li><a href=server-sent-events.html#server-sent-events-intro><span
                                                                        class=secno>9.2.1</span> Introduction</a>
                                                <li><a href=server-sent-events.html#the-eventsource-interface><span
                                                                        class=secno>9.2.2</span> The
                                                                <code>EventSource</code> interface</a>
                                                <li><a href=server-sent-events.html#sse-processing-model><span
                                                                        class=secno>9.2.3</span> Processing model</a>
                                                <li><a href=server-sent-events.html#the-last-event-id-header><span
                                                                        class=secno>9.2.4</span> The
                                                              
                                                <li><a href=server-sent-events.html#parsing-an-event-stream><span
                                                                        class=secno>9.2.5</span> Parsing an event
                                                                stream</a>
                                                <li><a href=server-sent-events.html#event-stream-interpretation><span
                                                                        class=secno>9.2.6</span> Interpreting an event
                                                                stream</a>
                                                <li><a href=server-sent-events.html#authoring-notes><span
                                                                        class=secno>9.2.7</span> Authoring notes</a>
                                                <li><a href=server-sent-events.html#eventsource-push><span
                                                                        class=secno>9.2.8</span> Connectionless push and
                                                                other features</a>
                                                <li><a href=server-sent-events.html#garbage-collection><span
                                                                        class=secno>9.2.9</span> Garbage collection</a>
                                                <li><a href=server-sent-events.html#implementation-advice><span
                                                                        class=secno>9.2.10</span> Implementation
                                                                advice</a>
                                        </ol>
                                <li><a href=web-messaging.html#web-messaging><span class=secno>9.3</span> Cross-document
                                                messaging</a>
                                        <ol>
                                                <li><a href=web-messaging.html#introduction-12><span
                                                                        class=secno>9.3.1</span> Introduction</a>
                                                <li><a href=web-messaging.html#security-postmsg><span
                                                                        class=secno>9.3.2</span> Security</a>
                                                        <ol>
                                                                <li><a href=web-messaging.html#authors><span
                                                                                        class=secno>9.3.2.1</span>
                                                                                Authors</a>
                                                                <li><a href=web-messaging.html#user-agents><span
                                                                                        class=secno>9.3.2.2</span> User
                                                                                agents</a>
                                                        </ol>
                                                <li><a href=web-messaging.html#posting-messages><span
                                                                        class=secno>9.3.3</span> Posting messages</a>
                                        </ol>
                                <li><a href=web-messaging.html#channel-messaging><span class=secno>9.4</span> Channel
                                                messaging</a>
                                        <ol>
                                                <li><a href=web-messaging.html#introduction-13><span
                                                                        class=secno>9.4.1</span> Introduction</a>
                                                        <ol>
                                                                <li><a href=web-messaging.html#examples-5><span
                                                                                        class=secno>9.4.1.1</span>
                                                                                Examples</a>
                                                                <li><a href=web-messaging.html#ports-as-the-basis-of-an-object-capability-model-on-the-web><span
                                                                                        class=secno>9.4.1.2</span> Ports
                                                                                as the basis of an object-capability
                                                                                model on the web</a>
                                                                <li><a href=web-messaging.html#ports-as-the-basis-of-abstracting-out-service-implementations><span
                                                                                        class=secno>9.4.1.3</span> Ports
                                                                                as the basis of abstracting out service
                                                                                implementations</a>
                                                        </ol>
                                                <li><a href=web-messaging.html#message-channels><span
                                                                        class=secno>9.4.2</span> Message channels</a>
                                                <li><a href=web-messaging.html#message-ports><span
                                                                        class=secno>9.4.3</span> Message ports</a>
                                                <li><a href=web-messaging.html#ports-and-garbage-collection><span
                                                                        class=secno>9.4.4</span> Ports and garbage
                                                                collection</a>
                                        </ol>
                                <li><a href=web-messaging.html#broadcasting-to-other-browsing-contexts><span
                                                        class=secno>9.5</span> Broadcasting to other browsing
                                                contexts</a>
                        </ol>
                <li id=toc-workers><a href=workers.html#workers><span class=secno>10</span> Web workers</a>
                        <ol>
                                <li><a href=workers.html#introduction-14><span class=secno>10.1</span> Introduction</a>
                                        <ol>
                                                <li><a href=workers.html#scope-2><span class=secno>10.1.1</span>
                                                                Scope</a>
                                                <li><a href=workers.html#examples-6><span class=secno>10.1.2</span>
                                                                Examples</a>
                                                        <ol>
                                                                <li><a href=workers.html#a-background-number-crunching-worker><span
                                                                                        class=secno>10.1.2.1</span> A
                                                                                background number-crunching worker</a>
                                                                <li><a href=workers.html#module-worker-example><span
                                                                                        class=secno>10.1.2.2</span>
                                                                                Using a JavaScript module as a
                                                                                worker</a>
                                                                <li><a href=workers.html#shared-workers-introduction><span
                                                                                        class=secno>10.1.2.3</span>
                                                                                Shared workers introduction</a>
                                                                <li><a href=workers.html#shared-state-using-a-shared-worker><span
                                                                                        class=secno>10.1.2.4</span>
                                                                                Shared state using a shared worker</a>
                                                                <li><a href=workers.html#delegation><span
                                                                                        class=secno>10.1.2.5</span>
                                                                                Delegation</a>
                                                                <li><a href=workers.html#providing-libraries><span
                                                                                        class=secno>10.1.2.6</span>
                                                                                Providing libraries</a>
                                                        </ol>
                                                <li><a href=workers.html#tutorials><span class=secno>10.1.3</span>
                                                                Tutorials</a>
                                                        <ol>
                                                                <li><a href=workers.html#creating-a-dedicated-worker><span
                                                                                        class=secno>10.1.3.1</span>
                                                                                Creating a dedicated worker</a>
                                                                <li><a href=workers.html#communicating-with-a-dedicated-worker><span
                                                                                        class=secno>10.1.3.2</span>
                                                                                Communicating with a dedicated
                                                                                worker</a>
                                                                <li><a href=workers.html#shared-workers><span
                                                                                        class=secno>10.1.3.3</span>
                                                                                Shared workers</a>
                                                        </ol>
                                        </ol>
                                <li><a href=workers.html#infrastructure-2><span class=secno>10.2</span>
                                                Infrastructure</a>
                                        <ol>
                                                <li><a href=workers.html#the-global-scope><span
                                                                        class=secno>10.2.1</span> The global scope</a>
                                                        <ol>
                                                                <li><a href=workers.html#the-workerglobalscope-common-interface><span
                                                                                        class=secno>10.2.1.1</span> The
                                                                                <code>WorkerGlobalScope</code> common
                                                                                interface</a>
                                                                <li><a href=workers.html#dedicated-workers-and-the-dedicatedworkerglobalscope-interface><span
                                                                                        class=secno>10.2.1.2</span>
                                                                                Dedicated workers and the
                                                                                <code>DedicatedWorkerGlobalScope</code>
                                                                                interface</a>
                                                                <li><a href=workers.html#shared-workers-and-the-sharedworkerglobalscope-interface><span
                                                                                        class=secno>10.2.1.3</span>
                                                                                Shared workers and the
                                                                                <code>SharedWorkerGlobalScope</code>
                                                                                interface</a>
                                                        </ol>
                                                <li><a href=workers.html#worker-event-loop><span
                                                                        class=secno>10.2.2</span> The event loop</a>
                                                <li><a href="workers.html#the-worker's-lifetime"><span
                                                                        class=secno>10.2.3</span> The worker's
                                                                lifetime</a>
                                                <li><a href=workers.html#worker-processing-model><span
                                                                        class=secno>10.2.4</span> Processing model</a>
                                                <li><a href=workers.html#runtime-script-errors-2><span
                                                                        class=secno>10.2.5</span> Runtime script
                                                                errors</a>
                                                <li><a href=workers.html#creating-workers><span
                                                                        class=secno>10.2.6</span> Creating workers</a>
                                                        <ol>
                                                                <li><a href=workers.html#the-abstractworker-mixin><span
                                                                                        class=secno>10.2.6.1</span> The
                                                                                <code>AbstractWorker</code> mixin</a>
                                                                <li><a href=workers.html#script-settings-for-workers><span
                                                                                        class=secno>10.2.6.2</span>
                                                                                Script settings for workers</a>
                                                                <li><a href=workers.html#dedicated-workers-and-the-worker-interface><span
                                                                                        class=secno>10.2.6.3</span>
                                                                                Dedicated workers and the
                                                                                <code>Worker</code> interface</a>
                                                                <li><a href=workers.html#shared-workers-and-the-sharedworker-interface><span
                                                                                        class=secno>10.2.6.4</span>
                                                                                Shared workers and the
                                                                                <code>SharedWorker</code> interface</a>
                                                        </ol>
                                                <li><a href=workers.html#navigator.hardwareconcurrency><span
                                                                        class=secno>10.2.7</span> Concurrent hardware
                                                                capabilities</a>
                                        </ol>
                                <li><a href=workers.html#apis-available-to-workers><span class=secno>10.3</span> APIs
                                                available to workers</a>
                                        <ol>
                                                <li><a href=workers.html#importing-scripts-and-libraries><span
                                                                        class=secno>10.3.1</span> Importing scripts and
                                                                libraries</a>
                                                <li><a href=workers.html#the-workernavigator-object><span
                                                                        class=secno>10.3.2</span> The
                                                                <code>WorkerNavigator</code> interface</a>
                                                <li><a href=workers.html#worker-locations><span
                                                                        class=secno>10.3.3</span> The
                                                                <code>WorkerLocation</code> interface</a>
                                        </ol>
                        </ol>
                <li id=toc-worklets><a href=worklets.html#worklets><span class=secno>11</span> Worklets</a>
                        <ol>
                                <li><a href=worklets.html#worklets-intro><span class=secno>11.1</span> Introduction</a>
                                        <ol>
                                                <li><a href=worklets.html#worklets-motivations><span
                                                                        class=secno>11.1.1</span> Motivations</a>
                                                <li><a href=worklets.html#worklets-idempotent><span
                                                                        class=secno>11.1.2</span> Code idempotence</a>
                                                <li><a href=worklets.html#worklets-speculative><span
                                                                        class=secno>11.1.3</span> Speculative
                                                                evaluation</a>
                                        </ol>
                                <li><a href=worklets.html#worklets-examples><span class=secno>11.2</span> Examples</a>
                                        <ol>
                                                <li><a href=worklets.html#worklets-examples-loading><span
                                                                        class=secno>11.2.1</span> Loading scripts</a>
                                                <li><a href=worklets.html#worklets-example-registering><span
                                                                        class=secno>11.2.2</span> Registering a class
                                                                and invoking its methods</a>
                                        </ol>
                                <li><a href=worklets.html#worklets-infrastructure><span class=secno>11.3</span>
                                                Infrastructure</a>
                                        <ol>
                                                <li><a href=worklets.html#worklets-global><span
                                                                        class=secno>11.3.1</span> The global scope</a>
                                                        <ol>
                                                                <li><a href=worklets.html#worklet-agents-and-event-loops><span
                                                                                        class=secno>11.3.1.1</span>
                                                                                Agents and event loops</a>
                                                                <li><a href=worklets.html#worklets-creation-termination><span
                                                                                        class=secno>11.3.1.2</span>
                                                                                Creation and termination</a>
                                                                <li><a href=worklets.html#script-settings-for-worklets><span
                                                                                        class=secno>11.3.1.3</span>
                                                                                Script settings for worklets</a>
                                                        </ol>
                                                <li><a href=worklets.html#worklets-worklet><span
                                                                        class=secno>11.3.2</span> The
                                                                <code>Worklet</code> class</a>
                                                <li><a href=worklets.html#worklets-lifetime><span
                                                                        class=secno>11.3.3</span> The worklet's
                                                                lifetime</a>
                                        </ol>
                        </ol>
                <li id=toc-webstorage><a href=webstorage.html#webstorage><span class=secno>12</span> Web storage</a>
                        <ol>
                                <li><a href=webstorage.html#introduction-15><span class=secno>12.1</span>
                                                Introduction</a>
                                <li><a href=webstorage.html#storage><span class=secno>12.2</span> The API</a>
                                        <ol>
                                                <li><a href=webstorage.html#the-storage-interface><span
                                                                        class=secno>12.2.1</span> The
                                                                <code>Storage</code> interface</a>
                                                <li><a href=webstorage.html#the-sessionstorage-attribute><span
                                                                        class=secno>12.2.2</span> The
                                                                <code>sessionStorage</code> getter</a>
                                                <li><a href=webstorage.html#the-localstorage-attribute><span
                                                                        class=secno>12.2.3</span> The
                                                                <code>localStorage</code> getter</a>
                                                <li><a href=webstorage.html#the-storageevent-interface><span
                                                                        class=secno>12.2.4</span> The
                                                                <code>StorageEvent</code> interface</a>
                                        </ol>
                                <li><a href=webstorage.html#privacy><span class=secno>12.3</span> Privacy</a>
                                        <ol>
                                                <li><a href=webstorage.html#user-tracking><span
                                                                        class=secno>12.3.1</span> User tracking</a>
                                                <li><a href=webstorage.html#sensitivity-of-data><span
                                                                        class=secno>12.3.2</span> Sensitivity of
                                                                data</a>
                                        </ol>
                                <li><a href=webstorage.html#security-storage><span class=secno>12.4</span> Security</a>
                                        <ol>
                                                <li><a href=webstorage.html#dns-spoofing-attacks><span
                                                                        class=secno>12.4.1</span> DNS spoofing
                                                                attacks</a>
                                                <li><a href=webstorage.html#cross-directory-attacks><span
                                                                        class=secno>12.4.2</span> Cross-directory
                                                                attacks</a>
                                                <li><a href=webstorage.html#implementation-risks><span
                                                                        class=secno>12.4.3</span> Implementation
                                                                risks</a>
                                        </ol>
                        </ol>
                <li id=toc-syntax><a href=syntax.html#syntax><span class=secno>13</span> The HTML syntax</a>
                        <ol>
                                <li><a href=syntax.html#writing><span class=secno>13.1</span> Writing HTML documents</a>
                                        <ol>
                                                <li><a href=syntax.html#the-doctype><span class=secno>13.1.1</span> The
                                                                DOCTYPE</a>
                                                <li><a href=syntax.html#elements-2><span class=secno>13.1.2</span>
                                                                Elements</a>
                                                        <ol>
                                                                <li><a href=syntax.html#start-tags><span
                                                                                        class=secno>13.1.2.1</span>
                                                                                Start tags</a>
                                                                <li><a href=syntax.html#end-tags><span
                                                                                        class=secno>13.1.2.2</span> End
                                                                                tags</a>
                                                                <li><a href=syntax.html#attributes-2><span
                                                                                        class=secno>13.1.2.3</span>
                                                                                Attributes</a>
                                                                <li><a href=syntax.html#optional-tags><span
                                                                                        class=secno>13.1.2.4</span>
                                                                                Optional tags</a>
                                                                <li><a href=syntax.html#element-restrictions><span
                                                                                        class=secno>13.1.2.5</span>
                                                                                Restrictions on content models</a>
                                                                <li><a href=syntax.html#cdata-rcdata-restrictions><span
                                                                                        class=secno>13.1.2.6</span>
                                                                                Restrictions on the contents of raw text
                                                                                and escapable raw text elements</a>
                                                        </ol>
                                                <li><a href=syntax.html#text-2><span class=secno>13.1.3</span> Text</a>
                                                        <ol>
                                                                <li><a href=syntax.html#newlines><span
                                                                                        class=secno>13.1.3.1</span>
                                                                                Newlines</a>
                                                        </ol>
                                                <li><a href=syntax.html#character-references><span
                                                                        class=secno>13.1.4</span> Character
                                                                references</a>
                                                <li><a href=syntax.html#cdata-sections><span class=secno>13.1.5</span>
                                                                CDATA sections</a>
                                                <li><a href=syntax.html#comments><span class=secno>13.1.6</span>
                                                                Comments</a>
                                        </ol>
                                <li><a href=parsing.html#parsing><span class=secno>13.2</span> Parsing HTML
                                                documents</a>
                                        <ol>
                                                <li><a href=parsing.html#overview-of-the-parsing-model><span
                                                                        class=secno>13.2.1</span> Overview of the
                                                                parsing model</a>
                                                <li><a href=parsing.html#parse-errors><span class=secno>13.2.2</span>
                                                                Parse errors</a>
                                                <li><a href=parsing.html#the-input-byte-stream><span
                                                                        class=secno>13.2.3</span> The input byte
                                                                stream</a>
                                                        <ol>
                                                                <li><a href=parsing.html#parsing-with-a-known-character-encoding><span
                                                                                        class=secno>13.2.3.1</span>
                                                                                Parsing with a known character
                                                                                encoding</a>
                                                                <li><a href=parsing.html#determining-the-character-encoding><span
                                                                                        class=secno>13.2.3.2</span>
                                                                                Determining the character encoding</a>
                                                                <li><a href=parsing.html#character-encodings><span
                                                                                        class=secno>13.2.3.3</span>
                                                                                Character encodings</a>
                                                                <li><a href=parsing.html#changing-the-encoding-while-parsing><span
                                                                                        class=secno>13.2.3.4</span>
                                                                                Changing the encoding while parsing</a>
                                                                <li><a href=parsing.html#preprocessing-the-input-stream><span
                                                                                        class=secno>13.2.3.5</span>
                                                                                Preprocessing the input stream</a>
                                                        </ol>
                                                <li><a href=parsing.html#parse-state><span class=secno>13.2.4</span>
                                                                Parse state</a>
                                                        <ol>
                                                                <li><a href=parsing.html#the-insertion-mode><span
                                                                                        class=secno>13.2.4.1</span> The
                                                                                insertion mode</a>
                                                                <li><a href=parsing.html#the-stack-of-open-elements><span
                                                                                        class=secno>13.2.4.2</span> The
                                                                                stack of open elements</a>
                                                                <li><a href=parsing.html#the-list-of-active-formatting-elements><span
                                                                                        class=secno>13.2.4.3</span> The
                                                                                list of active formatting elements</a>
                                                                <li><a href=parsing.html#the-element-pointers><span
                                                                                        class=secno>13.2.4.4</span> The
                                                                                element pointers</a>
                                                                <li><a href=parsing.html#other-parsing-state-flags><span
                                                                                        class=secno>13.2.4.5</span>
                                                                                Other parsing state flags</a>
                                                        </ol>
                                                <li><a href=parsing.html#tokenization><span class=secno>13.2.5</span>
                                                                Tokenization</a>
                                                        <ol>
                                                                <li><a href=parsing.html#data-state><span
                                                                                        class=secno>13.2.5.1</span> Data
                                                                                state</a>
                                                                <li><a href=parsing.html#rcdata-state><span
                                                                                        class=secno>13.2.5.2</span>
                                                                                RCDATA state</a>
                                                                <li><a href=parsing.html#rawtext-state><span
                                                                                        class=secno>13.2.5.3</span>
                                                                                RAWTEXT state</a>
                                                                <li><a href=parsing.html#script-data-state><span
                                                                                        class=secno>13.2.5.4</span>
                                                                                Script data state</a>
                                                                <li><a href=parsing.html#plaintext-state><span
                                                                                        class=secno>13.2.5.5</span>
                                                                                PLAINTEXT state</a>
                                                                <li><a href=parsing.html#tag-open-state><span
                                                                                        class=secno>13.2.5.6</span> Tag
                                                                                open state</a>
                                                                <li><a href=parsing.html#end-tag-open-state><span
                                                                                        class=secno>13.2.5.7</span> End
                                                                                tag open state</a>
                                                                <li><a href=parsing.html#tag-name-state><span
                                                                                        class=secno>13.2.5.8</span> Tag
                                                                                name state</a>
                                                                <li><a href=parsing.html#rcdata-less-than-sign-state><span
                                                                                        class=secno>13.2.5.9</span>
                                                                                RCDATA less-than sign state</a>
                                                                <li><a href=parsing.html#rcdata-end-tag-open-state><span
                                                                                        class=secno>13.2.5.10</span>
                                                                                RCDATA end tag open state</a>
                                                                <li><a href=parsing.html#rcdata-end-tag-name-state><span
                                                                                        class=secno>13.2.5.11</span>
                                                                                RCDATA end tag name state</a>
                                                                <li><a href=parsing.html#rawtext-less-than-sign-state><span
                                                                                        class=secno>13.2.5.12</span>
                                                                                RAWTEXT less-than sign state</a>
                                                                <li><a href=parsing.html#rawtext-end-tag-open-state><span
                                                                                        class=secno>13.2.5.13</span>
                                                                                RAWTEXT end tag open state</a>
                                                                <li><a href=parsing.html#rawtext-end-tag-name-state><span
                                                                                        class=secno>13.2.5.14</span>
                                                                                RAWTEXT end tag name state</a>
                                                                <li><a href=parsing.html#script-data-less-than-sign-state><span
                                                                                        class=secno>13.2.5.15</span>
                                                                                Script data less-than sign state</a>
                                                                <li><a href=parsing.html#script-data-end-tag-open-state><span
                                                                                        class=secno>13.2.5.16</span>
                                                                                Script data end tag open state</a>
                                                                <li><a href=parsing.html#script-data-end-tag-name-state><span
                                                                                        class=secno>13.2.5.17</span>
                                                                                Script data end tag name state</a>
                                                                <li><a href=parsing.html#script-data-escape-start-state><span
                                                                                        class=secno>13.2.5.18</span>
                                                                                Script data escape start state</a>
                                                                <li><a href=parsing.html#script-data-escape-start-dash-state><span
                                                                                        class=secno>13.2.5.19</span>
                                                                                Script data escape start dash state</a>
                                                                <li><a href=parsing.html#script-data-escaped-state><span
                                                                                        class=secno>13.2.5.20</span>
                                                                                Script data escaped state</a>
                                                                <li><a href=parsing.html#script-data-escaped-dash-state><span
                                                                                        class=secno>13.2.5.21</span>
                                                                                Script data escaped dash state</a>
                                                                <li><a href=parsing.html#script-data-escaped-dash-dash-state><span
                                                                                        class=secno>13.2.5.22</span>
                                                                                Script data escaped dash dash state</a>
                                                                <li><a href=parsing.html#script-data-escaped-less-than-sign-state><span
                                                                                        class=secno>13.2.5.23</span>
                                                                                Script data escaped less-than sign
                                                                                state</a>
                                                                <li><a href=parsing.html#script-data-escaped-end-tag-open-state><span
                                                                                        class=secno>13.2.5.24</span>
                                                                                Script data escaped end tag open
                                                                                state</a>
                                                                <li><a href=parsing.html#script-data-escaped-end-tag-name-state><span
                                                                                        class=secno>13.2.5.25</span>
                                                                                Script data escaped end tag name
                                                                                state</a>
                                                                <li><a href=parsing.html#script-data-double-escape-start-state><span
                                                                                        class=secno>13.2.5.26</span>
                                                                                Script data double escape start
                                                                                state</a>
                                                                <li><a href=parsing.html#script-data-double-escaped-state><span
                                                                                        class=secno>13.2.5.27</span>
                                                                                Script data double escaped state</a>
                                                                <li><a href=parsing.html#script-data-double-escaped-dash-state><span
                                                                                        class=secno>13.2.5.28</span>
                                                                                Script data double escaped dash
                                                                                state</a>
                                                                <li><a href=parsing.html#script-data-double-escaped-dash-dash-state><span
                                                                                        class=secno>13.2.5.29</span>
                                                                                Script data double escaped dash dash
                                                                                state</a>
                                                                <li><a href=parsing.html#script-data-double-escaped-less-than-sign-state><span
                                                                                        class=secno>13.2.5.30</span>
                                                                                Script data double escaped less-than
                                                                                sign state</a>
                                                                <li><a href=parsing.html#script-data-double-escape-end-state><span
                                                                                        class=secno>13.2.5.31</span>
                                                                                Script data double escape end state</a>
                                                                <li><a href=parsing.html#before-attribute-name-state><span
                                                                                        class=secno>13.2.5.32</span>
                                                                                Before attribute name state</a>
                                                                <li><a href=parsing.html#attribute-name-state><span
                                                                                        class=secno>13.2.5.33</span>
                                                                                Attribute name state</a>
                                                                <li><a href=parsing.html#after-attribute-name-state><span
                                                                                        class=secno>13.2.5.34</span>
                                                                                After attribute name state</a>
                                                                <li><a href=parsing.html#before-attribute-value-state><span
                                                                                        class=secno>13.2.5.35</span>
                                                                                Before attribute value state</a>
                                                                <li><a href=parsing.html#attribute-value-(double-quoted)-state><span
                                                                                        class=secno>13.2.5.36</span>
                                                                                Attribute value (double-quoted)
                                                                                state</a>
                                                                <li><a href=parsing.html#attribute-value-(single-quoted)-state><span
                                                                                        class=secno>13.2.5.37</span>
                                                                                Attribute value (single-quoted)
                                                                                state</a>
                                                                <li><a href=parsing.html#attribute-value-(unquoted)-state><span
                                                                                        class=secno>13.2.5.38</span>
                                                                                Attribute value (unquoted) state</a>
                                                                <li><a href=parsing.html#after-attribute-value-(quoted)-state><span
                                                                                        class=secno>13.2.5.39</span>
                                                                                After attribute value (quoted) state</a>
                                                                <li><a href=parsing.html#self-closing-start-tag-state><span
                                                                                        class=secno>13.2.5.40</span>
                                                                                Self-closing start tag state</a>
                                                                <li><a href=parsing.html#bogus-comment-state><span
                                                                                        class=secno>13.2.5.41</span>
                                                                                Bogus comment state</a>
                                                                <li><a href=parsing.html#markup-declaration-open-state><span
                                                                                        class=secno>13.2.5.42</span>
                                                                                Markup declaration open state</a>
                                                                <li><a href=parsing.html#comment-start-state><span
                                                                                        class=secno>13.2.5.43</span>
                                                                                Comment start state</a>
                                                                <li><a href=parsing.html#comment-start-dash-state><span
                                                                                        class=secno>13.2.5.44</span>
                                                                                Comment start dash state</a>
                                                                <li><a href=parsing.html#comment-state><span
                                                                                        class=secno>13.2.5.45</span>
                                                                                Comment state</a>
                                                                <li><a href=parsing.html#comment-less-than-sign-state><span
                                                                                        class=secno>13.2.5.46</span>
                                                                                Comment less-than sign state</a>
                                                                <li><a href=parsing.html#comment-less-than-sign-bang-state><span
                                                                                        class=secno>13.2.5.47</span>
                                                                                Comment less-than sign bang state</a>
                                                                <li><a href=parsing.html#comment-less-than-sign-bang-dash-state><span
                                                                                        class=secno>13.2.5.48</span>
                                                                                Comment less-than sign bang dash
                                                                                state</a>
                                                                <li><a href=parsing.html#comment-less-than-sign-bang-dash-dash-state><span
                                                                                        class=secno>13.2.5.49</span>
                                                                                Comment less-than sign bang dash dash
                                                                                state</a>
                                                                <li><a href=parsing.html#comment-end-dash-state><span
                                                                                        class=secno>13.2.5.50</span>
                                                                                Comment end dash state</a>
                                                                <li><a href=parsing.html#comment-end-state><span
                                                                                        class=secno>13.2.5.51</span>
                                                                                Comment end state</a>
                                                                <li><a href=parsing.html#comment-end-bang-state><span
                                                                                        class=secno>13.2.5.52</span>
                                                                                Comment end bang state</a>
                                                                <li><a href=parsing.html#doctype-state><span
                                                                                        class=secno>13.2.5.53</span>
                                                                                DOCTYPE state</a>
                                                                <li><a href=parsing.html#before-doctype-name-state><span
                                                                                        class=secno>13.2.5.54</span>
                                                                                Before DOCTYPE name state</a>
                                                                <li><a href=parsing.html#doctype-name-state><span
                                                                                        class=secno>13.2.5.55</span>
                                                                                DOCTYPE name state</a>
                                                                <li><a href=parsing.html#after-doctype-name-state><span
                                                                                        class=secno>13.2.5.56</span>
                                                                                After DOCTYPE name state</a>
                                                                <li><a href=parsing.html#after-doctype-public-keyword-state><span
                                                                                        class=secno>13.2.5.57</span>
                                                                                After DOCTYPE public keyword state</a>
                                                                <li><a href=parsing.html#before-doctype-public-identifier-state><span
                                                                                        class=secno>13.2.5.58</span>
                                                                                Before DOCTYPE public identifier
                                                                                state</a>
                                                                <li><a href=parsing.html#doctype-public-identifier-(double-quoted)-state><span
                                                                                        class=secno>13.2.5.59</span>
                                                                                DOCTYPE public identifier
                                                                                (double-quoted) state</a>
                                                                <li><a href=parsing.html#doctype-public-identifier-(single-quoted)-state><span
                                                                                        class=secno>13.2.5.60</span>
                                                                                DOCTYPE public identifier
                                                                                (single-quoted) state</a>
                                                                <li><a href=parsing.html#after-doctype-public-identifier-state><span
                                                                                        class=secno>13.2.5.61</span>
                                                                                After DOCTYPE public identifier
                                                                                state</a>
                                                                <li><a href=parsing.html#between-doctype-public-and-system-identifiers-state><span
                                                                                        class=secno>13.2.5.62</span>
                                                                                Between DOCTYPE public and system
                                                                                identifiers state</a>
                                                                <li><a href=parsing.html#after-doctype-system-keyword-state><span
                                                                                        class=secno>13.2.5.63</span>
                                                                                After DOCTYPE system keyword state</a>
                                                                <li><a href=parsing.html#before-doctype-system-identifier-state><span
                                                                                        class=secno>13.2.5.64</span>
                                                                                Before DOCTYPE system identifier
                                                                                state</a>
                                                                <li><a href=parsing.html#doctype-system-identifier-(double-quoted)-state><span
                                                                                        class=secno>13.2.5.65</span>
                                                                                DOCTYPE system identifier
                                                                                (double-quoted) state</a>
                                                                <li><a href=parsing.html#doctype-system-identifier-(single-quoted)-state><span
                                                                                        class=secno>13.2.5.66</span>
                                                                                DOCTYPE system identifier
                                                                                (single-quoted) state</a>
                                                                <li><a href=parsing.html#after-doctype-system-identifier-state><span
                                                                                        class=secno>13.2.5.67</span>
                                                                                After DOCTYPE system identifier
                                                                                state</a>
                                                                <li><a href=parsing.html#bogus-doctype-state><span
                                                                                        class=secno>13.2.5.68</span>
                                                                                Bogus DOCTYPE state</a>
                                                                <li><a href=parsing.html#cdata-section-state><span
                                                                                        class=secno>13.2.5.69</span>
                                                                                CDATA section state</a>
                                                                <li><a href=parsing.html#cdata-section-bracket-state><span
                                                                                        class=secno>13.2.5.70</span>
                                                                                CDATA section bracket state</a>
                                                                <li><a href=parsing.html#cdata-section-end-state><span
                                                                                        class=secno>13.2.5.71</span>
                                                                                CDATA section end state</a>
                                                                <li><a href=parsing.html#character-reference-state><span
                                                                                        class=secno>13.2.5.72</span>
                                                                                Character reference state</a>
                                                                <li><a href=parsing.html#named-character-reference-state><span
                                                                                        class=secno>13.2.5.73</span>
                                                                                Named character reference state</a>
                                                                <li><a href=parsing.html#ambiguous-ampersand-state><span
                                                                                        class=secno>13.2.5.74</span>
                                                                                Ambiguous ampersand state</a>
                                                                <li><a href=parsing.html#numeric-character-reference-state><span
                                                                                        class=secno>13.2.5.75</span>
                                                                                Numeric character reference state</a>
                                                                <li><a href=parsing.html#hexadecimal-character-reference-start-state><span
                                                                                        class=secno>13.2.5.76</span>
                                                                                Hexadecimal character reference start
                                                                                state</a>
                                                                <li><a href=parsing.html#decimal-character-reference-start-state><span
                                                                                        class=secno>13.2.5.77</span>
                                                                                Decimal character reference start
                                                                                state</a>
                                                                <li><a href=parsing.html#hexadecimal-character-reference-state><span
                                                                                        class=secno>13.2.5.78</span>
                                                                                Hexadecimal character reference
                                                                                state</a>
                                                                <li><a href=parsing.html#decimal-character-reference-state><span
                                                                                        class=secno>13.2.5.79</span>
                                                                                Decimal character reference state</a>
                                                                <li><a href=parsing.html#numeric-character-reference-end-state><span
                                                                                        class=secno>13.2.5.80</span>
                                                                                Numeric character reference end
                                                                                state</a>
                                                        </ol>
                                                <li><a href=parsing.html#tree-construction><span
                                                                        class=secno>13.2.6</span> Tree construction</a>
                                                        <ol>
                                                                <li><a href=parsing.html#creating-and-inserting-nodes><span
                                                                                        class=secno>13.2.6.1</span>
                                                                                Creating and inserting nodes</a>
                                                                <li><a href=parsing.html#parsing-elements-that-contain-only-text><span
                                                                                        class=secno>13.2.6.2</span>
                                                                                Parsing elements that contain only
                                                                                text</a>
                                                                <li><a href=parsing.html#closing-elements-that-have-implied-end-tags><span
                                                                                        class=secno>13.2.6.3</span>
                                                                                Closing elements that have implied end
                                                                                tags</a>
                                                                <li><a href=parsing.html#parsing-main-inhtml><span
                                                                                        class=secno>13.2.6.4</span> The
                                                                                rules for parsing tokens in HTML
                                                                                content</a>
                                                                        <ol>
                                                                                <li><a href=parsing.html#the-initial-insertion-mode><span
                                                                                                        class=secno>13.2.6.4.1</span>
                                                                                                The "initial" insertion
                                                                                                mode</a>
                                                                                <li><a href=parsing.html#the-before-html-insertion-mode><span
                                                                                                        class=secno>13.2.6.4.2</span>
                                                                                                The "before html"
                                                                                                insertion mode</a>
                                                                                <li><a href=parsing.html#the-before-head-insertion-mode><span
                                                                                                        class=secno>13.2.6.4.3</span>
                                                                                                The "before head"
                                                                                                insertion mode</a>
                                                                                <li><a href=parsing.html#parsing-main-inhead><span
                                                                                                        class=secno>13.2.6.4.4</span>
                                                                                                The "in head" insertion
                                                                                                mode</a>
                                                                                <li><a href=parsing.html#parsing-main-inheadnoscript><span
                                                                                                        class=secno>13.2.6.4.5</span>
                                                                                                The "in head noscript"
                                                                                                insertion mode</a>
                                                                                <li><a href=parsing.html#the-after-head-insertion-mode><span
                                                                                                        class=secno>13.2.6.4.6</span>
                                                                                                The "after head"
                                                                                                insertion mode</a>
                                                                                <li><a href=parsing.html#parsing-main-inbody><span
                                                                                                        class=secno>13.2.6.4.7</span>
                                                                                                The "in body" insertion
                                                                                                mode</a>
                                                                                <li><a href=parsing.html#parsing-main-incdata><span
                                                                                                        class=secno>13.2.6.4.8</span>
                                                                                                The "text" insertion
                                                                                                mode</a>
                                                                                <li><a href=parsing.html#parsing-main-intable><span
                                                                                                        class=secno>13.2.6.4.9</span>
                                                                                                The "in table" insertion
                                                                                                mode</a>
                                                                                <li><a href=parsing.html#parsing-main-intabletext><span
                                                                                                        class=secno>13.2.6.4.10</span>
                                                                                                The "in table text"
                                                                                                insertion mode</a>
                                                                                <li><a href=parsing.html#parsing-main-incaption><span
                                                                                                        class=secno>13.2.6.4.11</span>
                                                                                                The "in caption"
                                                                                                insertion mode</a>
                                                                                <li><a href=parsing.html#parsing-main-incolgroup><span
                                                                                                        class=secno>13.2.6.4.12</span>
                                                                                                The "in column group"
                                                                                                insertion mode</a>
                                                                                <li><a href=parsing.html#parsing-main-intbody><span
                                                                                                        class=secno>13.2.6.4.13</span>
                                                                                                The "in table body"
                                                                                                insertion mode</a>
                                                                                <li><a href=parsing.html#parsing-main-intr><span
                                                                                                        class=secno>13.2.6.4.14</span>
                                                                                                The "in row" insertion
                                                                                                mode</a>
                                                                                <li><a href=parsing.html#parsing-main-intd><span
                                                                                                        class=secno>13.2.6.4.15</span>
                                                                                                The "in cell" insertion
                                                                                                mode</a>
                                                                                <li><a href=parsing.html#parsing-main-inselect><span
                                                                                                        class=secno>13.2.6.4.16</span>
                                                                                                The "in select"
                                                                                                insertion mode</a>
                                                                                <li><a href=parsing.html#parsing-main-inselectintable><span
                                                                                                        class=secno>13.2.6.4.17</span>
                                                                                                The "in select in table"
                                                                                                insertion mode</a>
                                                                                <li><a href=parsing.html#parsing-main-intemplate><span
                                                                                                        class=secno>13.2.6.4.18</span>
                                                                                                The "in template"
                                                                                                insertion mode</a>
                                                                                <li><a href=parsing.html#parsing-main-afterbody><span
                                                                                                        class=secno>13.2.6.4.19</span>
                                                                                                The "after body"
                                                                                                insertion mode</a>
                                                                                <li><a href=parsing.html#parsing-main-inframeset><span
                                                                                                        class=secno>13.2.6.4.20</span>
                                                                                                The "in frameset"
                                                                                                insertion mode</a>
                                                                                <li><a href=parsing.html#parsing-main-afterframeset><span
                                                                                                        class=secno>13.2.6.4.21</span>
                                                                                                The "after frameset"
                                                                                                insertion mode</a>
                                                                                <li><a href=parsing.html#the-after-after-body-insertion-mode><span
                                                                                                        class=secno>13.2.6.4.22</span>
                                                                                                The "after after body"
                                                                                                insertion mode</a>
                                                                                <li><a href=parsing.html#the-after-after-frameset-insertion-mode><span
                                                                                                        class=secno>13.2.6.4.23</span>
                                                                                                The "after after
                                                                                                frameset" insertion
                                                                                                mode</a>
                                                                        </ol>
                                                                <li><a href=parsing.html#parsing-main-inforeign><span
                                                                                        class=secno>13.2.6.5</span> The
                                                                                rules for parsing tokens in foreign
                                                                                content</a>
                                                        </ol>
                                                <li><a href=parsing.html#the-end><span class=secno>13.2.7</span> The
                                                                end</a>
                                                <li><a href=parsing.html#speculative-html-parsing><span
                                                                        class=secno>13.2.8</span> Speculative HTML
                                                                parsing</a>
                                                <li><a href=parsing.html#coercing-an-html-dom-into-an-infoset><span
                                                                        class=secno>13.2.9</span> Coercing an HTML DOM
                                                                into an infoset</a>
                                                <li><a href=parsing.html#an-introduction-to-error-handling-and-strange-cases-in-the-parser><span
                                                                        class=secno>13.2.10</span> An introduction to
                                                                error handling and strange cases in the parser</a>
                                                        <ol>
                                                                <li><a href=parsing.html#misnested-tags:-b-i-/b-/i><span
                                                                                        class=secno>13.2.10.1</span>
                                                                                Misnested tags:
                                                                                &lt;b>&lt;i>&lt;/b>&lt;/i></a>
                                                                <li><a href=parsing.html#misnested-tags:-b-p-/b-/p><span
                                                                                        class=secno>13.2.10.2</span>
                                                                                Misnested tags:
                                                                                &lt;b>&lt;p>&lt;/b>&lt;/p></a>
                                                                <li><a href=parsing.html#unexpected-markup-in-tables><span
                                                                                        class=secno>13.2.10.3</span>
                                                                                Unexpected markup in tables</a>
                                                                <li><a href=parsing.html#scripts-that-modify-the-page-as-it-is-being-parsed><span
                                                                                        class=secno>13.2.10.4</span>
                                                                                Scripts that modify the page as it is
                                                                                being parsed</a>
                                                                <li><a href=parsing.html#the-execution-of-scripts-that-are-moving-across-multiple-documents><span
                                                                                        class=secno>13.2.10.5</span> The
                                                                                execution of scripts that are moving
                                                                                across multiple documents</a>
                                                                <li><a href=parsing.html#unclosed-formatting-elements><span
                                                                                        class=secno>13.2.10.6</span>
                                                                                Unclosed formatting elements</a>
                                                        </ol>
                                        </ol>
                                <li><a href=parsing.html#serialising-html-fragments><span class=secno>13.3</span>
                                                Serializing HTML fragments</a>
                                <li><a href=parsing.html#parsing-html-fragments><span class=secno>13.4</span> Parsing
                                                HTML fragments</a>
                                <li><a href=named-characters.html#named-character-references><span
                                                        class=secno>13.5</span> Named character references</a>
                        </ol>
                <li id=toc-the-xhtml-syntax><a href=xhtml.html#the-xhtml-syntax><span class=secno>14</span> The XML
                                syntax</a>
                        <ol>
                                <li><a href=xhtml.html#writing-xhtml-documents><span class=secno>14.1</span> Writing
                                                documents in the XML syntax</a>
                                <li><a href=xhtml.html#parsing-xhtml-documents><span class=secno>14.2</span> Parsing XML
                                                documents</a>
                                <li><a href=xhtml.html#serialising-xhtml-fragments><span class=secno>14.3</span>
                                                Serializing XML fragments</a>
                                <li><a href=xhtml.html#parsing-xhtml-fragments><span class=secno>14.4</span> Parsing XML
                                                fragments</a>
                        </ol>
                <li id=toc-rendering><a href=rendering.html#rendering><span class=secno>15</span> Rendering</a>
                        <ol>
                                <li><a href=rendering.html#introduction-16><span class=secno>15.1</span>
                                                Introduction</a>
                                <li><a href=rendering.html#the-css-user-agent-style-sheet-and-presentational-hints><span
                                                        class=secno>15.2</span> The CSS user agent style sheet and
                                                presentational hints</a>
                                <li><a href=rendering.html#non-replaced-elements><span class=secno>15.3</span>
                                                Non-replaced elements</a>
                                        <ol>
                                                <li><a href=rendering.html#hidden-elements><span
                                                                        class=secno>15.3.1</span> Hidden elements</a>
                                                <li><a href=rendering.html#the-page><span class=secno>15.3.2</span> The
                                                                page</a>
                                                <li><a href=rendering.html#flow-content-3><span
                                                                        class=secno>15.3.3</span> Flow content</a>
                                                <li><a href=rendering.html#phrasing-content-3><span
                                                                        class=secno>15.3.4</span> Phrasing content</a>
                                                <li><a href=rendering.html#bidi-rendering><span
                                                                        class=secno>15.3.5</span> Bidirectional text</a>
                                                <li><a href=rendering.html#sections-and-headings><span
                                                                        class=secno>15.3.6</span> Sections and
                                                                headings</a>
                                                <li><a href=rendering.html#lists><span class=secno>15.3.7</span>
                                                                Lists</a>
                                                <li><a href=rendering.html#tables-2><span class=secno>15.3.8</span>
                                                                Tables</a>
                                                <li><a href=rendering.html#margin-collapsing-quirks><span
                                                                        class=secno>15.3.9</span> Margin collapsing
                                                                quirks</a>
                                                <li><a href=rendering.html#form-controls><span
                                                                        class=secno>15.3.10</span> Form controls</a>
                                                <li><a href=rendering.html#the-hr-element-2><span
                                                                        class=secno>15.3.11</span> The <code>hr</code>
                                                                element</a>
                                                <li><a href=rendering.html#the-fieldset-and-legend-elements><span
                                                                        class=secno>15.3.12</span> The
                                                                <code>fieldset</code> and <code>legend</code>
                                                                elements</a>
                                        </ol>
                                <li><a href=rendering.html#replaced-elements><span class=secno>15.4</span> Replaced
                                                elements</a>
                                        <ol>
                                                <li><a href=rendering.html#embedded-content-rendering-rules><span
                                                                        class=secno>15.4.1</span> Embedded content</a>
                                                <li><a href=rendering.html#images-3><span class=secno>15.4.2</span>
                                                                Images</a>
                                                <li><a href=rendering.html#attributes-for-embedded-content-and-images><span
                                                                        class=secno>15.4.3</span> Attributes for
                                                                embedded content and images</a>
                                                <li><a href=rendering.html#image-maps-2><span class=secno>15.4.4</span>
                                                                Image maps</a>
                                        </ol>
                                <li><a href=rendering.html#widgets><span class=secno>15.5</span> Widgets</a>
                                        <ol>
                                                <li><a href=rendering.html#native-appearance-2><span
                                                                        class=secno>15.5.1</span> Native appearance</a>
                                                <li><a href=rendering.html#button-layout><span class=secno>15.5.2</span>
                                                                Button layout</a>
                                                <li><a href=rendering.html#the-button-element-2><span
                                                                        class=secno>15.5.3</span> The
                                                                <code>button</code> element</a>
                                                <li><a href=rendering.html#the-details-and-summary-elements><span
                                                                        class=secno>15.5.4</span> The
                                                                <code>details</code> and <code>summary</code>
                                                                elements</a>
                                                <li><a href=rendering.html#the-input-element-as-a-text-entry-widget><span
                                                                        class=secno>15.5.5</span> The <code>input</code>
                                                                element as a text entry widget</a>
                                                <li><a href=rendering.html#the-input-element-as-domain-specific-widgets><span
                                                                        class=secno>15.5.6</span> The <code>input</code>
                                                                element as domain-specific widgets</a>
                                                <li><a href=rendering.html#the-input-element-as-a-range-control><span
                                                                        class=secno>15.5.7</span> The <code>input</code>
                                                                element as a range control</a>
                                                <li><a href=rendering.html#the-input-element-as-a-colour-well><span
                                                                        class=secno>15.5.8</span> The <code>input</code>
                                                                element as a color
                                                                well</a>
                                                <li><a href=rendering.html#the-input-element-as-a-checkbox-and-radio-button-widgets><span
                                                                        class=secno>15.5.9</span> The <code>input</code>
                                                                element as a checkbox and radio button widgets</a>
                                                <li><a href=rendering.html#the-input-element-as-a-file-upload-control><span
                                                                        class=secno>15.5.10</span> The
                                                                <code>input</code> element as a file upload control</a>
                                                <li><a href=rendering.html#the-input-element-as-a-button><span
                                                                        class=secno>15.5.11</span> The
                                                                <code>input</code> element as a button</a>
                                                <li><a href=rendering.html#the-marquee-element-2><span
                                                                        class=secno>15.5.12</span> The
                                                                <code>marquee</code> element</a>
                                                <li><a href=rendering.html#the-meter-element-2><span
                                                                        class=secno>15.5.13</span> The
                                                                <code>meter</code> element</a>
                                                <li><a href=rendering.html#the-progress-element-2><span
                                                                        class=secno>15.5.14</span> The
                                                                <code>progress</code> element</a>
                                                <li><a href=rendering.html#the-select-element-2><span
                                                                        class=secno>15.5.15</span> The
                                                                <code>select</code> element</a>
                                                <li><a href=rendering.html#the-textarea-element-2><span
                                                                        class=secno>15.5.16</span> The
                                                                <code>textarea</code> element</a>
                                        </ol>
                                <li><a href=rendering.html#frames-and-framesets><span class=secno>15.6</span> Frames and
                                                framesets</a>
                                <li><a href=rendering.html#interactive-media><span class=secno>15.7</span> Interactive
                                                media</a>
                                        <ol>
                                                <li><a href=rendering.html#links,-forms,-and-navigation><span
                                                                        class=secno>15.7.1</span> Links, forms, and
                                                                navigation</a>
                                                <li><a href=rendering.html#the-title-attribute-2><span
                                                                        class=secno>15.7.2</span> The <code>title</code>
                                                                attribute</a>
                                                <li><a href=rendering.html#editing-hosts><span class=secno>15.7.3</span>
                                                                Editing hosts</a>
                                                <li><a href=rendering.html#text-rendered-in-native-user-interfaces><span
                                                                        class=secno>15.7.4</span> Text rendered in
                                                                native user interfaces</a>
                                        </ol>
                                <li><a href=rendering.html#print-media><span class=secno>15.8</span> Print media</a>
                                <li><a href=rendering.html#unstyled-xml-documents><span class=secno>15.9</span> Unstyled
                                                XML documents</a>
                        </ol>
                <li id=toc-obsolete><a href=obsolete.html#obsolete><span class=secno>16</span> Obsolete features</a>
                        <ol>
                                <li><a href=obsolete.html#obsolete-but-conforming-features><span class=secno>16.1</span>
                                                Obsolete but conforming features</a>
                                        <ol>
                                                <li><a href=obsolete.html#warnings-for-obsolete-but-conforming-features><span
                                                                        class=secno>16.1.1</span> Warnings for obsolete
                                                                but conforming features</a>
                                        </ol>
                                <li><a href=obsolete.html#non-conforming-features><span class=secno>16.2</span>
                                                Non-conforming features</a>
                                <li><a href=obsolete.html#requirements-for-implementations><span class=secno>16.3</span>
                                                Requirements for implementations</a>
                                        <ol>
                                                <li><a href=obsolete.html#the-marquee-element><span
                                                                        class=secno>16.3.1</span> The
                                                                <code>marquee</code> element</a>
                                                <li><a href=obsolete.html#frames><span class=secno>16.3.2</span>
                                                                Frames</a>
                                                <li><a href=obsolete.html#other-elements,-attributes-and-apis><span
                                                                        class=secno>16.3.3</span> Other elements,
                                                                attributes and APIs</a>
                                        </ol>
                        </ol>
                <li id=toc-iana><a href=iana.html#iana><span class=secno>17</span> IANA considerations</a>
                        <ol>
                                <li><a href=iana.html#text/html><span class=secno>17.1</span> <code>text/html</code></a>
                                <li><a href=iana.html#multipart/x-mixed-replace><span class=secno>17.2</span>
                                                <code>multipart/x-mixed-replace</code></a>
                                <li><a href=iana.html#application/xhtml+xml><span class=secno>17.3</span>
                                                <code>application/xhtml+xml</code></a>
                                <li><a href=iana.html#text/ping><span class=secno>17.4</span> <code>text/ping</code></a>
                                <li><a href=iana.html#application/microdata+json><span class=secno>17.5</span>
                                                <code>application/microdata+json</code></a>
                                <li><a href=iana.html#text/event-stream><span class=secno>17.6</span>
                                                <code>text/event-stream</code></a>
                                <li><a href=iana.html#web+-scheme-prefix><span class=secno>17.7</span> <code>web+</code>
                                                scheme prefix</a>
                        </ol>
                <li id=toc-index><a href=indices.html#index>Index</a>
                        <ol>
                                <li><a href=indices.html#elements-3>Elements</a>
                                <li><a href=indices.html#element-content-categories>Element content categories</a>
                                <li><a href=indices.html#attributes-3>Attributes</a>
                                <li><a href=indices.html#element-interfaces>Element interfaces</a>
                                <li><a href=indices.html#all-interfaces>All interfaces</a>
                                <li><a href=indices.html#events-2>Events</a>
                                <li><a href=indices.html#http-headers>HTTP headers</a>
                                <li><a href=indices.html#mime-types-2>MIME types</a>
                        </ol>
                <li id=toc-references><a href=references.html#references>References</a>
                <li id=toc-acknowledgments><a href=acknowledgements.html#acknowledgments>Acknowledgments</a>
                <li id=toc-ipr><a href=acknowledgements.html#ipr>Intellectual property rights</a>
        </ol>

`

export default htmlSpec