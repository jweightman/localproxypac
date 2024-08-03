function FindProxyForURL(url, host) {
    url = url.toLowerCase();

    shExpMatch(url, "*.github.com*"){
    return "PROXY localhost:3128";
    }
    return "DIRECT"; 
  
}

