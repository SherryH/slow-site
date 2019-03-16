This is a slow website made of a few carousels and rubbish dom nodes creations.

The purpose of the website is to investigate the performance improvement by implementing (Idle Until Urgent)[https://philipwalton.com/articles/idle-until-urgent/] pattern.

To better capture the performance difference, I used the Performance tool on Chrome developer tool and set the Network to 'Fast 3G' and CPU to '4x Slowdown'.

## Original
Details saved in the profile `Profile-3Gslow-loadAll.json`.
First Contentful Paint: roughly 6000ms
onLoad event: roughly 7000ms

## React OnVisible
Code saved in the branch `onVisible-applied`
Details saved in the profile `Profile-3GSlow-onVisible.json`.
First Contentful Paint: roughly 5000ms
onLoad event: roughly 6600ms

Some improvement was observed as only 3 carousels are rendered on the first load. The rest of the carousels are rendered when they are scrolled into view.

## IdleQueue + React OnVisible
Code saved in the branch `Idlize-applied`
Details saved in the profile `Profile-3GSlow-IdleQueue.json`.
First Contentful Paint: less than 1000ms
onLoad event: roughly 1000ms

Lots of improvement was seen because both rendering of the component and the creation of rubbish dom nodes are delayed until idle or when in view.
