from HTMLParser import HTMLParser

f = open('frequent_words.html')
ht = f.read()

class MyHTMLParser(HTMLParser):
    extract = False
    def handle_starttag(self, tag, attrs):
        if tag == 'td':
            if not attrs:
                self.extract = True
            else:
                self.extract = False
    def handle_data(self, data):
        if self.extract:
            print data
            self.extract = False

p = MyHTMLParser()
p.feed(ht)
