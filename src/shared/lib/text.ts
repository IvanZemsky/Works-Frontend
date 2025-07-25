export function clearURL(url: string) {
   return url.split("/")[2]
}

export function capitalize(...strings: string[]) {
   return strings
      .map((str) => str.charAt(0).toUpperCase() + str.slice(1))
      .join(" ");
}
