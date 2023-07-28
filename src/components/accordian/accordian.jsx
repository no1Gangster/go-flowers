import {
  Accordion,
  Heading,
  Box,
  Text,
  AccordionButton,
  AccordionItem,
  Icon,
  AccordionPanel,
  ListItem,
  Link,
  List,
  UnorderedList,
} from "@chakra-ui/react";
import { useState } from "react";
import { MinusIcon, AddIcon } from "@chakra-ui/icons";
import React from "react";
function MyAccordion() {
  return (
    <Box textAlign="start">
      <Accordion allowMultiple m="1%">
        <AccordionItem>
          {({ isExpanded }) => (
            <>
              <h2>
                <AccordionButton>
                  <Box
                    as="span"
                    flex="1"
                    textAlign="left"
                    textColor="purple"
                    fontWeight="bold"
                    fontSize="lg"
                  >
                    More About Our Flower Delivery
                  </Box>
                  {isExpanded ? (
                    <MinusIcon fontSize="12px" />
                  ) : (
                    <AddIcon fontSize="12px" />
                  )}
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} allowMultiple textAlign="start">
                <Box>
                  <Heading fontSize="sm" bg="lightgray" padding="1%">
                    Send Flowers Online with Flower Delivery by Go-Flowers.com,
                    the World's Favorite Florist!
                  </Heading>
                  <Text>
                    There's no better place to order flowers online than
                    Go-Flowers.com. Whether you're looking to buy flowers and
                    gifts like{" "}
                    <span
                      style={{ text: "purple", textDecoration: "underline" }}
                    >
                      roses
                    </span>
                    , orchids, gift baskets, bonsai trees, flowering
                    <span
                      style={{ text: "purple", textDecoration: "underline" }}
                    >
                      plants
                    </span>{" "}
                    or wedding bouquets, we have the highest quality blooms and
                    the most talented florists who can create exactly what you
                    order. Dazzle and delight your loved ones wherever they may
                    be with truly original flowers and gifts from
                    Go-Flowers.com.
                  </Text>
                </Box>

                <Box>
                  <Heading fontSize="sm" bg="lightgray" padding="1%">
                    Quick Flower Delivery and Great Customer Service
                  </Heading>
                  <Text>
                    Same-day flower delivery is available every day, for all
                    seasons: spring, winter, summer and fall. To send flowers
                    for same-day delivery, all you have to do is place your
                    order by the following times in the gift receiver's time
                    zone: 2:30 p.m. weekdays, 1:15 p.m. Saturdays, and 11:45
                    a.m. Sundays. Our customer service team is standing by to
                    help you with any gift or flower order. Whether you're
                    sending red roses to your sweetie, celebrating a birthday,
                    or sending a get well gift to someone feeling under the
                    weather, if you have questions, our team has answers! Just
                    call 1-800-356-9377 or place an order for flower delivery
                    online. We will help you find and deliver the perfect
                    flowers, plants, or gift to celebrate life's most meaningful
                    moments - from birthday gift recommendations, to anniversary
                    floral arrangements she is sure to love. For sympathy gifts
                    and funeral flowers, our team of experienced Sympathy
                    Advisors are ready to assist you at 1-866-538-2259.
                  </Text>
                </Box>

                <Box>
                  <Heading fontSize="sm" bg="lightgray" padding="1%">
                    Order the Best Flowers Online for All Occasions and Holidays
                  </Heading>
                  <Text>
                    We're the best choice when shopping online for gifts and
                    flowers just because, or for special occasions like Mother's
                    Day or Valentine's Day. Choose the perfect gift from the
                    best selection of flower arrangements, roses, mixed
                    bouquets, fruit arrangements, gourmet baskets, and other
                    gifts. With a wide variety of colors, sizes and seasonal
                    themes, you can buy flowers and gifts for everyone. With
                    same-day gift delivery, we're also your source for
                    last-minute gifts, too! Deliver smiles all year long with
                    Free Shipping/No Service Charge on all your flowers & gifts
                    when you join the Celebrations Passport® program.
                  </Text>
                </Box>

                <Box>
                  <Heading fontSize="sm" bg="lightgray" padding="1%">
                    Fresh Flowers Guaranteed by Trusted Florists
                  </Heading>
                  <Text>
                    In 1976, Jim McCann, founder of Go-Flowers.com, opened his
                    first retail florist shop and forever changed the way people
                    buy flowers for birthdays, anniversaries, and other special
                    occasions. For more than 40 years, our passion has been to
                    help you connect and express yourself to the important
                    people in your life by providing the finest selection of
                    beautiful flowers and arrangements available for same day or
                    next day delivery, from roses and orchids to tulips,
                    carnations, and daisies. With quality supported by our 100%
                    Satisfaction Guarantee, you can also find plants, gift
                    baskets, gourmet foods, and stuffed animals that are perfect
                    for every occasion. Ranked consecutively on the Top 1000
                    list of North America’s Leading Online Retailers by Digital
                    Commerce 360, Go-FLOWERS.COM, Inc. is proud to offer
                    solutions for every gifting need, whether you're looking for
                    flower delivery across town or across the country.
                  </Text>
                </Box>

                <Box>
                  <Heading fontSize="sm" bg="lightgray" padding="1%">
                    Trending Flowers News & Articles from Our Flower Blog, Petal
                    Talk:
                  </Heading>
                  <UnorderedList>
                    <ListItem>
                      <Link>Flower Color Meanings</Link>
                    </ListItem>
                    <ListItem>
                      <Link>Best Plant Care Tips from Our Plant Corner</Link>
                    </ListItem>
                    <ListItem>
                      <Link>Different Types of Flowers with Pictures</Link>
                    </ListItem>
                    <ListItem>
                      <Link>Thoughtful Sympathy Card Message Ideas</Link>
                    </ListItem>
                    <ListItem>
                      <Link>How to Preserve Flowers in Wax</Link>
                    </ListItem>
                  </UnorderedList>
                </Box>
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
      </Accordion>
    </Box>
  );
}

export default MyAccordion;
