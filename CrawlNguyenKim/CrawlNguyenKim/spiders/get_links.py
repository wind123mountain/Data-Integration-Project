from operator import index
from subprocess import call
from scipy.fft import next_fast_len
import scrapy
import time

class GetLinks(scrapy.Spider):
    name = "links"
    index_page = 1
    base_url = "https://www.nguyenkim.com/dien-thoai-di-dong/page-{}/"

    def start_requests(self):
        for idx in range(1,8):
            yield scrapy.Request(url = self.base_url.format(idx), callback=self.parse)
    def parse(self, response):
        for link_phone in response.css('#pagination_contents .product'):
            yield {
                 'link': link_phone.css('a::attr(href)').get()
            }