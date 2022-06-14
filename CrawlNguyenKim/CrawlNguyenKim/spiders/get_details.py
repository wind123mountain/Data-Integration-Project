from operator import index
from subprocess import call
from scipy.fft import next_fast_len
import scrapy
import time
import json


class GetDetails(scrapy.Spider):
    name = "details"

    headers = {
        'user-agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36'}

    def start_requests(self):
        with open(r"D:\20212\THDL\CrawlTiki\CrawlTiki\spiders\link_phone.json", mode='r', encoding='utf8') as f:
            urls = json.load(f)
        print(len(urls))
        for url in urls:
            yield scrapy.Request(url = url['link'], callback= self.parse)

    def parse(self, response):
        detail = response.css("#productSpecification_fullContent")
        keys = detail.css(".title::text").getall()
        values = detail.css(".value::text").getall()
        
        result = {}
        result["Tên sản phẩm"] = response.css('.product_info_name::text').get()
        result["Giá"] = response.css('.nk-price-final::text').get()
        result["Ảnh"] = response.css('.img-full-width::attr(src)').get()
        result.update(dict(zip(keys, values)))
        yield result