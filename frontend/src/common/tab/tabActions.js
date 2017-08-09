export function selectTab(tabId) {
  return {
    type: 'TAB_SELECTED',
    payload: tabId
  }
}

export function showTabs( ...tabIds) {
  const tabsToShow = {}
  tabIds.forEach( current => tabsToShow[current] = true )

  return {
    type: 'TAB_SHOWED',
    payload: tabsToShow
  }
}