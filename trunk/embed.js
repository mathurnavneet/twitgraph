document.write('<script type="text/javascript" src="http://www.google.com/jsapi"></sc'+'ript>');
document.write('<script type="text/javascript" src="{{base_url}}/s/js/app.js?v={{version}}"></sc'+'ript>');

var TWITGRAPH_BASE_URL = '{{base_url}}';
function twitgraph_onAppJsLoad() {
  window.query_state = new twitgraph.QueryState('{{q|escape}}',
      {% if dynamic_date %}true{% else %}false{% endif%},
      Date.parse('{{start|escape}}'),
      Date.parse('{{end|escape}}'),
      {{duration|escape}},
      {% if show_text %}true{% else %}false{% endif%});
  twitgraph.Utils.$('twit-graph').innerHTML = '<div id="twg-graph"></div>' +
      '<div id="twg-graph-pie"></div>' +
      '<div id="twg-resultsText"></div>';
  try{
  google.setOnLoadCallback(twitgraph.Utils.createDelegate(twitgraph.Utils, twitgraph.Utils.onGvizLoaded));
  } catch(e){}
}
document.write('{{css}}');
