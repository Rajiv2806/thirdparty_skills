---
title: "Personality Insights"
date: "2018-02-02"
toc: true
menu:
  main:
    parent: "ml-skills"
    identifier: "personality-insights"
    #weight: 4420
---
Generates a personality profile for the author of the input text.
The service analyzes text in Arabic, English, Japanese, Korean, or Spanish and returns its results in a variety of languages.

The profile includes information about the Big Five personality, Needs, and Values characteristics for the author as inferred from the input text.
The service reports a `percentile`, or normalized score, for each characteristic.
The service computes the percentile by comparing the author's results with the results from a sample population.

The scores you see are all percentiles.
They are comparing one person to a broader population.
For example, a 90% on Extraversion does not mean that the person is 90% extroverted.
It means that for that single trait, the person is more extroverted than 90% of the people in the population.


## Use cases
> Understand their customers at a deeper level by learning their clients' preferences, improving customer satisfaction, and strengthening client relations.

> Improve client acquisition, retention, and engagement.

> Guide highly personalized engagements and interactions to better tailor their products, services, campaigns, and communications for individual clients.

## Inputs

skill takes text as input.A sample example for the input is shown below:
```
"input_text": "Albert Einstein (14 March 1879 – 18 April 1955) was a German-born theoretical physicist.
              [5] Einstein developed the theory of relativity, one of the two pillars of modern physics
              (alongside quantum mechanics).[4][6]:274 Einstein's work is also known for its influence on
              the philosophy of science.[7][8] Einstein is best known by the general public for his mass–energy
              equivalence formula E = mc2 (which has been dubbed the world's most famous equation).
              [9] He received the 1921 Nobel Prize in Physics for his services to theoretical physics, and
              especially for his discovery of the law of the photoelectric effect,[10] a pivotal step in
              the evolution of quantum theory. Near the beginning of his career, Einstein thought that
              Newtonian mechanics was no longer enough to reconcile the laws of classical mechanics with the
              laws of the electromagnetic field. This led him to develop his special theory of relativity during
              his time at the Swiss Patent Office in Bern (1902–1909), Switzerland. However, he realized that
              the principle of relativity could also be extended to gravitational fields and—with his subsequent
              theory of gravitation in 1916—he published a paper on general relativity. He continued to
              deal with problems of statistical mechanics and quantum theory, which led to his explanations
              of particle theory and the motion of molecules. He also investigated the thermal properties of
              light which laid the foundation of the photon theory of light. In 1917, Einstein applied the
              general theory of relativity to model the large-scale structure of the universe.
              Between 1895 and 1914, he lived in Switzerland (except for one year in Prague, 1911–12),
              where he received his academic diploma from the Swiss Federal Polytechnic in Zürich
              (later the Eidgenössische Technische Hochschule, ETH) in 1900. He later taught there at the same
              institute as a professor of theoretical physics between 1912 and 1914 before he left for Berlin.
              In 1901, after being stateless for more than five years, Einstein acquired Swiss citizenship,
              which he kept for the rest of his life. In 1905, Einstein was awarded a PhD by the University
              of Zürich. The same year, his annus mirabilis (miracle year), he published four groundbreaking papers,
              which were to bring him to the notice of the academic world, at the age of 26.
              He was visiting the United States when Adolf Hitler came to power in 1933 and—being Jewish—did not
              go back to Germany, where he had been a professor at the Berlin Academy of Sciences.
              He settled in the United States, becoming an American citizen in 1940.[13] On the eve of World War II,
              he endorsed a letter to President Franklin D. Roosevelt alerting him to the potential development of
              extremely powerful bombs of a new type and recommending that the U.S. begin similar research.
              This eventually led to what would become the Manhattan Project. Einstein supported defending the Allied
              forces, but generally denounced the idea of using the newly discovered nuclear fission as a weapon.
              Later, with the British philosopher Bertrand Russell, Einstein signed the Russell–Einstein Manifesto,
              which highlighted the danger of nuclear weapons. Einstein was affiliated with the Institute for Advanced
              Study in Princeton, New Jersey, until his death in 1955. The discovery and publication in 1987 of an early
              correspondence between Einstein and Marić revealed that they had had a daughter, called Lieserl in their
              letters, born in early 1902 in Novi Sad where Marić was staying with her parents. Marić returned to
              Switzerland without the child, whose real name and fate are unknown. Einstein probably never saw his
              daughter. The contents of his letter to Marić in September 1903 suggest that the girl was either given
              up for adoption or died of scarlet fever in infancy. Einstein, looking relaxed and holding a pipe,
              stands next to a smiling, well-dressed Elsa who is wearing a fancy hat and fur wrap. She is looking
              at him. Einstein with his wife Elsa, 1921 Einstein and Marić married in January 1903. In May 1904,
              their first son, Hans Albert Einstein, was born in Bern, Switzerland. Their second son, Eduard, was
              born in Zürich in July 1910. In April 1914 they moved to Berlin. After a few months his wife returned
              to Zürich with their sons, after learning that Einstein's chief romantic attraction was his first and
              second cousin Elsa.[35] They divorced on 14 February 1919, having lived apart for five years.[36]
              Eduard, whom his father called Tete (for petit), had a breakdown at about age 20 and was diagnosed
              with schizophrenia. His mother cared for him and he was also committed to asylums for several periods,
              finally being committed permanently after her death."
,"require_PersonalityCharacteristics" : true
,"require_NeedsPreferences": true
,"require_ValuesInfo":true
,"require_Consumptionpreferences":true
```

## Outputs

An example output for the Personality Insights API is shown below:

```
 {
    "payload": {
        "response": {
             "consumption_preferences": [
                        {
                            "consumption_preference_category_id": "consumption_preferences_shopping",
                            "consumption_preferences": [
                                {
                                    "consumption_preference_id": "consumption_preferences_automobile_ownership_cost",
                                    "name": "Likely to be sensitive to ownership cost when buying automobiles",
                                    "score": 1
                                },
                                {
                                    "consumption_preference_id": "consumption_preferences_automobile_safety",
                                    "name": "Likely to prefer safety when buying automobiles",
                                    "score": 1
                                },
                                {
                                    "consumption_preference_id": "consumption_preferences_clothes_quality",
                                    "name": "Likely to prefer quality when buying clothes",
                                    "score": 1
                                },
                                {
                                    "consumption_preference_id": "consumption_preferences_clothes_style",
                                    "name": "Likely to prefer style when buying clothes",
                                    "score": 0
                                },
                                {
                                    "consumption_preference_id": "consumption_preferences_clothes_comfort",
                                    "name": "Likely to prefer comfort when buying clothes",
                                    "score": 1
                                },
                                {
                                    "consumption_preference_id": "consumption_preferences_influence_brand_name",
                                    "name": "Likely to be influenced by brand name when making product purchases",
                                    "score": 0
                                },
                                {
                                    "consumption_preference_id": "consumption_preferences_influence_utility",
                                    "name": "Likely to be influenced by product utility when making product purchases",
                                    "score": 1
                                },
                                {
                                    "consumption_preference_id": "consumption_preferences_influence_online_ads",
                                    "name": "Likely to be influenced by online ads when making product purchases",
                                    "score": 0
                                },
                                {
                                    "consumption_preference_id": "consumption_preferences_influence_social_media",
                                    "name": "Likely to be influenced by social media when making product purchases",
                                    "score": 0
                                },
                                {
                                    "consumption_preference_id": "consumption_preferences_influence_family_members",
                                    "name": "Likely to be influenced by family when making product purchases",
                                    "score": 0
                                },
                                {
                                    "consumption_preference_id": "consumption_preferences_spur_of_moment",
                                    "name": "Likely to indulge in spur of the moment purchases",
                                    "score": 0
                                },
                                {
                                    "consumption_preference_id": "consumption_preferences_credit_card_payment",
                                    "name": "Likely to prefer using credit cards for shopping",
                                    "score": 1
                                }
                            ],
                            "name": "Purchasing Preferences"
                        },
                        {
                            "consumption_preference_category_id": "consumption_preferences_health_and_activity",
                            "consumption_preferences": [
                                {
                                    "consumption_preference_id": "consumption_preferences_eat_out",
                                    "name": "Likely to eat out frequently",
                                    "score": 0
                                },
                                {
                                    "consumption_preference_id": "consumption_preferences_gym_membership",
                                    "name": "Likely to have a gym membership",
                                    "score": 0
                                },
                                {
                                    "consumption_preference_id": "consumption_preferences_outdoor",
                                    "name": "Likely to like outdoor activities",
                                    "score": 1
                                }
                            ],
                            "name": "Health & Activity Preferences"
                        },
                        {
                            "consumption_preference_category_id": "consumption_preferences_environmental_concern",
                            "consumption_preferences": [
                                {
                                    "consumption_preference_id": "consumption_preferences_concerned_environment",
                                    "name": "Likely to be concerned about the environment",
                                    "score": 1
                                }
                            ],
                            "name": "Environmental Concern Preferences"
                        },
                        {
                            "consumption_preference_category_id": "consumption_preferences_entrepreneurship",
                            "consumption_preferences": [
                                {
                                    "consumption_preference_id": "consumption_preferences_start_business",
                                    "name": "Likely to consider starting a business in next few years",
                                    "score": 0.5
                                }
                            ],
                            "name": "Entrepreneurship Preferences"
                        },
                        {
                            "consumption_preference_category_id": "consumption_preferences_movie",
                            "consumption_preferences": [
                                {
                                    "consumption_preference_id": "consumption_preferences_movie_romance",
                                    "name": "Likely to like romance movies",
                                    "score": 0
                                },
                                {
                                    "consumption_preference_id": "consumption_preferences_movie_adventure",
                                    "name": "Likely to like adventure movies",
                                    "score": 1
                                },
                                {
                                    "consumption_preference_id": "consumption_preferences_movie_horror",
                                    "name": "Likely to like horror movies",
                                    "score": 0
                                },
                                {
                                    "consumption_preference_id": "consumption_preferences_movie_musical",
                                    "name": "Likely to like musical movies",
                                    "score": 0
                                },
                                {
                                    "consumption_preference_id": "consumption_preferences_movie_historical",
                                    "name": "Likely to like historical movies",
                                    "score": 1
                                },
                                {
                                    "consumption_preference_id": "consumption_preferences_movie_science_fiction",
                                    "name": "Likely to like science-fiction movies",
                                    "score": 1
                                },
                                {
                                    "consumption_preference_id": "consumption_preferences_movie_war",
                                    "name": "Likely to like war movies",
                                    "score": 1
                                },
                                {
                                    "consumption_preference_id": "consumption_preferences_movie_drama",
                                    "name": "Likely to like drama movies",
                                    "score": 0
                                },
                                {
                                    "consumption_preference_id": "consumption_preferences_movie_action",
                                    "name": "Likely to like action movies",
                                    "score": 1
                                },
                                {
                                    "consumption_preference_id": "consumption_preferences_movie_documentary",
                                    "name": "Likely to like documentary movies",
                                    "score": 1
                                }
                            ],
                            "name": "Movie Preferences"
                        },
                        {
                            "consumption_preference_category_id": "consumption_preferences_music",
                            "consumption_preferences": [
                                {
                                    "consumption_preference_id": "consumption_preferences_music_rap",
                                    "name": "Likely to like rap music",
                                    "score": 0
                                },
                                {
                                    "consumption_preference_id": "consumption_preferences_music_country",
                                    "name": "Likely to like country music",
                                    "score": 0.5
                                },
                                {
                                    "consumption_preference_id": "consumption_preferences_music_r_b",
                                    "name": "Likely to like R&B music",
                                    "score": 0.5
                                },
                                {
                                    "consumption_preference_id": "consumption_preferences_music_hip_hop",
                                    "name": "Likely to like hip hop music",
                                    "score": 0
                                },
                                {
                                    "consumption_preference_id": "consumption_preferences_music_live_event",
                                    "name": "Likely to attend live musical events",
                                    "score": 1
                                },
                                {
                                    "consumption_preference_id": "consumption_preferences_music_playing",
                                    "name": "Likely to have experience playing music",
                                    "score": 1
                                },
                                {
                                    "consumption_preference_id": "consumption_preferences_music_latin",
                                    "name": "Likely to like Latin music",
                                    "score": 1
                                },
                                {
                                    "consumption_preference_id": "consumption_preferences_music_rock",
                                    "name": "Likely to like rock music",
                                    "score": 1
                                },
                                {
                                    "consumption_preference_id": "consumption_preferences_music_classical",
                                    "name": "Likely to like classical music",
                                    "score": 1
                                }
                            ],
                            "name": "Music Preferences"
                        },
                        {
                            "consumption_preference_category_id": "consumption_preferences_reading",
                            "consumption_preferences": [
                                {
                                    "consumption_preference_id": "consumption_preferences_read_frequency",
                                    "name": "Likely to read often",
                                    "score": 1
                                },
                                {
                                    "consumption_preference_id": "consumption_preferences_books_entertainment_magazines",
                                    "name": "Likely to read entertainment magazines",
                                    "score": 0
                                },
                                {
                                    "consumption_preference_id": "consumption_preferences_books_non_fiction",
                                    "name": "Likely to read non-fiction books",
                                    "score": 1
                                },
                                {
                                    "consumption_preference_id": "consumption_preferences_books_financial_investing",
                                    "name": "Likely to read financial investment books",
                                    "score": 0
                                },
                                {
                                    "consumption_preference_id": "consumption_preferences_books_autobiographies",
                                    "name": "Likely to read autobiographical books",
                                    "score": 1
                                }
                            ],
                            "name": "Reading Preferences"
                        },
                        {
                            "consumption_preference_category_id": "consumption_preferences_volunteering",
                            "consumption_preferences": [
                                {
                                    "consumption_preference_id": "consumption_preferences_volunteer",
                                    "name": "Likely to volunteer for social causes",
                                    "score": 1
                                }
                            ],
                            "name": "Volunteering Preferences"
                        }
                    ],
                    "needs": [
                        {
                            "category": "needs",
                            "name": "Challenge",
                            "percentile": 0.007371244714052261,
                            "raw_score": 0.6224147912875998,
                            "significant": true,
                            "trait_id": "need_challenge"
                        },
                        {
                            "category": "needs",
                            "name": "Closeness",
                            "percentile": 0.02188821220370879,
                            "raw_score": 0.7038677744042957,
                            "significant": true,
                            "trait_id": "need_closeness"
                        },
                        {
                            "category": "needs",
                            "name": "Curiosity",
                            "percentile": 0.39226865018911106,
                            "raw_score": 0.8094543269263681,
                            "significant": true,
                            "trait_id": "need_curiosity"
                        },
                        {
                            "category": "needs",
                            "name": "Excitement",
                            "percentile": 0.007715526982998044,
                            "raw_score": 0.4928043276171772,
                            "significant": true,
                            "trait_id": "need_excitement"
                        },
                        {
                            "category": "needs",
                            "name": "Harmony",
                            "percentile": 0.007278505781756095,
                            "raw_score": 0.7248930872347301,
                            "significant": true,
                            "trait_id": "need_harmony"
                        },
                        {
                            "category": "needs",
                            "name": "Ideal",
                            "percentile": 0.01441779661824849,
                            "raw_score": 0.5871843773045974,
                            "significant": true,
                            "trait_id": "need_ideal"
                        },
                        {
                            "category": "needs",
                            "name": "Liberty",
                            "percentile": 0.003107057968206872,
                            "raw_score": 0.6340058639737145,
                            "significant": true,
                            "trait_id": "need_liberty"
                        },
                        {
                            "category": "needs",
                            "name": "Love",
                            "percentile": 0.046497397260684414,
                            "raw_score": 0.6869444218612045,
                            "significant": true,
                            "trait_id": "need_love"
                        },
                        {
                            "category": "needs",
                            "name": "Practicality",
                            "percentile": 0.008167328472626578,
                            "raw_score": 0.675890764433494,
                            "significant": true,
                            "trait_id": "need_practicality"
                        },
                        {
                            "category": "needs",
                            "name": "Self-expression",
                            "percentile": 0.003897159630011471,
                            "raw_score": 0.5832500259910389,
                            "significant": true,
                            "trait_id": "need_self_expression"
                        },
                        {
                            "category": "needs",
                            "name": "Stability",
                            "percentile": 0.05928645358097784,
                            "raw_score": 0.6847424787065329,
                            "significant": true,
                            "trait_id": "need_stability"
                        },
                        {
                            "category": "needs",
                            "name": "Structure",
                            "percentile": 0.49016497617841637,
                            "raw_score": 0.6954104760429022,
                            "significant": true,
                            "trait_id": "need_structure"
                        }
                    ],
                    "personality": [
                        {
                            "category": "personality",
                            "children": [
                                {
                                    "category": "personality",
                                    "name": "Adventurousness",
                                    "percentile": 0.5795646595675823,
                                    "raw_score": 0.5119585813428628,
                                    "significant": true,
                                    "trait_id": "facet_adventurousness"
                                },
                                {
                                    "category": "personality",
                                    "name": "Artistic interests",
                                    "percentile": 0.9190343312421918,
                                    "raw_score": 0.7361268701321491,
                                    "significant": true,
                                    "trait_id": "facet_artistic_interests"
                                },
                                {
                                    "category": "personality",
                                    "name": "Emotionality",
                                    "percentile": 0.4376330103267006,
                                    "raw_score": 0.6417954627016934,
                                    "significant": true,
                                    "trait_id": "facet_emotionality"
                                },
                                {
                                    "category": "personality",
                                    "name": "Imagination",
                                    "percentile": 0.7806848957752004,
                                    "raw_score": 0.7733288467182672,
                                    "significant": true,
                                    "trait_id": "facet_imagination"
                                },
                                {
                                    "category": "personality",
                                    "name": "Intellect",
                                    "percentile": 0.9971542988304688,
                                    "raw_score": 0.7352326974510106,
                                    "significant": true,
                                    "trait_id": "facet_intellect"
                                },
                                {
                                    "category": "personality",
                                    "name": "Authority-challenging",
                                    "percentile": 0.9763005990930831,
                                    "raw_score": 0.6160919745797991,
                                    "significant": true,
                                    "trait_id": "facet_liberalism"
                                }
                            ],
                            "name": "Openness",
                            "percentile": 0.9994726373423998,
                            "raw_score": 0.8532282254452659,
                            "significant": true,
                            "trait_id": "big5_openness"
                        },
                        {
                            "category": "personality",
                            "children": [
                                {
                                    "category": "personality",
                                    "name": "Achievement striving",
                                    "percentile": 0.6834498978279089,
                                    "raw_score": 0.7136724375560959,
                                    "significant": true,
                                    "trait_id": "facet_achievement_striving"
                                },
                                {
                                    "category": "personality",
                                    "name": "Cautiousness",
                                    "percentile": 0.8440858835371818,
                                    "raw_score": 0.5563182877454474,
                                    "significant": true,
                                    "trait_id": "facet_cautiousness"
                                },
                                {
                                    "category": "personality",
                                    "name": "Dutifulness",
                                    "percentile": 0.5130015465230016,
                                    "raw_score": 0.6596986520226666,
                                    "significant": true,
                                    "trait_id": "facet_dutifulness"
                                },
                                {
                                    "category": "personality",
                                    "name": "Orderliness",
                                    "percentile": 0.20267004152712098,
                                    "raw_score": 0.46689911959869707,
                                    "significant": true,
                                    "trait_id": "facet_orderliness"
                                },
                                {
                                    "category": "personality",
                                    "name": "Self-discipline",
                                    "percentile": 0.266429802531602,
                                    "raw_score": 0.5409452736939387,
                                    "significant": true,
                                    "trait_id": "facet_self_discipline"
                                },
                                {
                                    "category": "personality",
                                    "name": "Self-efficacy",
                                    "percentile": 0.6952630440734376,
                                    "raw_score": 0.7710645031572118,
                                    "significant": true,
                                    "trait_id": "facet_self_efficacy"
                                }
                            ],
                            "name": "Conscientiousness",
                            "percentile": 0.7136914388918251,
                            "raw_score": 0.6543658351869057,
                            "significant": true,
                            "trait_id": "big5_conscientiousness"
                        },
                        {
                            "category": "personality",
                            "children": [
                                {
                                    "category": "personality",
                                    "name": "Activity level",
                                    "percentile": 0.5872876067521459,
                                    "raw_score": 0.5516657557461626,
                                    "significant": true,
                                    "trait_id": "facet_activity_level"
                                },
                                {
                                    "category": "personality",
                                    "name": "Assertiveness",
                                    "percentile": 0.6590075727225547,
                                    "raw_score": 0.6645425819921107,
                                    "significant": true,
                                    "trait_id": "facet_assertiveness"
                                },
                                {
                                    "category": "personality",
                                    "name": "Cheerfulness",
                                    "percentile": 0.0004950207719014998,
                                    "raw_score": 0.5076166162474803,
                                    "significant": true,
                                    "trait_id": "facet_cheerfulness"
                                },
                                {
                                    "category": "personality",
                                    "name": "Excitement-seeking",
                                    "percentile": 0.11598240843394686,
                                    "raw_score": 0.5529229390254138,
                                    "significant": true,
                                    "trait_id": "facet_excitement_seeking"
                                },
                                {
                                    "category": "personality",
                                    "name": "Outgoing",
                                    "percentile": 0.09177485214156417,
                                    "raw_score": 0.4937865278471836,
                                    "significant": true,
                                    "trait_id": "facet_friendliness"
                                },
                                {
                                    "category": "personality",
                                    "name": "Gregariousness",
                                    "percentile": 0.0004708650691623295,
                                    "raw_score": 0.2833092960790684,
                                    "significant": true,
                                    "trait_id": "facet_gregariousness"
                                }
                            ],
                            "name": "Extraversion",
                            "percentile": 0.1236563895408882,
                            "raw_score": 0.49938108116435453,
                            "significant": true,
                            "trait_id": "big5_extraversion"
                        },
                        {
                            "category": "personality",
                            "children": [
                                {
                                    "category": "personality",
                                    "name": "Altruism",
                                    "percentile": 0.6791886918302423,
                                    "raw_score": 0.7214172017943478,
                                    "significant": true,
                                    "trait_id": "facet_altruism"
                                },
                                {
                                    "category": "personality",
                                    "name": "Cooperation",
                                    "percentile": 0.583359935044649,
                                    "raw_score": 0.5920710205127502,
                                    "significant": true,
                                    "trait_id": "facet_cooperation"
                                },
                                {
                                    "category": "personality",
                                    "name": "Modesty",
                                    "percentile": 0.27459584779596935,
                                    "raw_score": 0.41676998462598897,
                                    "significant": true,
                                    "trait_id": "facet_modesty"
                                },
                                {
                                    "category": "personality",
                                    "name": "Uncompromising",
                                    "percentile": 0.0988386446917317,
                                    "raw_score": 0.5650285012592675,
                                    "significant": true,
                                    "trait_id": "facet_morality"
                                },
                                {
                                    "category": "personality",
                                    "name": "Sympathy",
                                    "percentile": 0.9207759358857748,
                                    "raw_score": 0.7173300691295617,
                                    "significant": true,
                                    "trait_id": "facet_sympathy"
                                },
                                {
                                    "category": "personality",
                                    "name": "Trust",
                                    "percentile": 0.6596937973743143,
                                    "raw_score": 0.6027597047691464,
                                    "significant": true,
                                    "trait_id": "facet_trust"
                                }
                            ],
                            "name": "Agreeableness",
                            "percentile": 0.10379134157846648,
                            "raw_score": 0.6920981351399083,
                            "significant": true,
                            "trait_id": "big5_agreeableness"
                        },
                        {
                            "category": "personality",
                            "children": [
                                {
                                    "category": "personality",
                                    "name": "Fiery",
                                    "percentile": 0.652917235669787,
                                    "raw_score": 0.5572184201165629,
                                    "significant": true,
                                    "trait_id": "facet_anger"
                                },
                                {
                                    "category": "personality",
                                    "name": "Prone to worry",
                                    "percentile": 0.5871183415695634,
                                    "raw_score": 0.6091246812226175,
                                    "significant": true,
                                    "trait_id": "facet_anxiety"
                                },
                                {
                                    "category": "personality",
                                    "name": "Melancholy",
                                    "percentile": 0.8649757151744338,
                                    "raw_score": 0.5182976406543885,
                                    "significant": true,
                                    "trait_id": "facet_depression"
                                },
                                {
                                    "category": "personality",
                                    "name": "Immoderation",
                                    "percentile": 0.19663838739005163,
                                    "raw_score": 0.46778109017586483,
                                    "significant": true,
                                    "trait_id": "facet_immoderation"
                                },
                                {
                                    "category": "personality",
                                    "name": "Self-consciousness",
                                    "percentile": 0.9050022800503479,
                                    "raw_score": 0.6156771691741096,
                                    "significant": true,
                                    "trait_id": "facet_self_consciousness"
                                },
                                {
                                    "category": "personality",
                                    "name": "Susceptible to stress",
                                    "percentile": 0.38992729860161296,
                                    "raw_score": 0.44981398328557076,
                                    "significant": true,
                                    "trait_id": "facet_vulnerability"
                                }
                            ],
                            "name": "Emotional range",
                            "percentile": 0.6992972498025322,
                            "raw_score": 0.49681328516429246,
                            "significant": true,
                            "trait_id": "big5_neuroticism"
                        }
                    ],
                    "processed_language": "en",
                    "values": [
                        {
                            "category": "values",
                            "name": "Conservation",
                            "percentile": 0.06958584136450563,
                            "raw_score": 0.5988259585604796,
                            "significant": true,
                            "trait_id": "value_conservation"
                        },
                        {
                            "category": "values",
                            "name": "Openness to change",
                            "percentile": 0.11980732268873018,
                            "raw_score": 0.7389220327258172,
                            "significant": true,
                            "trait_id": "value_openness_to_change"
                        },
                        {
                            "category": "values",
                            "name": "Hedonism",
                            "percentile": 0.0016062462539196964,
                            "raw_score": 0.5499009892357385,
                            "significant": true,
                            "trait_id": "value_hedonism"
                        },
                        {
                            "category": "values",
                            "name": "Self-enhancement",
                            "percentile": 0.016481660153905564,
                            "raw_score": 0.6127717631818892,
                            "significant": true,
                            "trait_id": "value_self_enhancement"
                        },
                        {
                            "category": "values",
                            "name": "Self-transcendence",
                            "percentile": 0.019691018834053997,
                            "raw_score": 0.7994032358052072,
                            "significant": true,
                            "trait_id": "value_self_transcendence"
                        }
                    ],
                    "warnings": [],
                    "word_count": 741
                }
                    ]
```


## Adding Personality Insights to an agent
### Prerequisites
* Acquire an API key from IBM Watson for the Personality Insights API.

### Add the skill
1. Use **Add** > **Skill** to find and add the Personality Insights Skill.
1. Click the skill to select it, and set the following values in the **Properties** panel:

    * **Model**: Select **IBM Watson**.
    * **API Key**: Enter your API Key for the Personality Insights API.

### Add input and output
1. Add a service input.
1. Give the service a name that is unique inside this agent.
1. Select **text** as the **Input Type**.
1. Select **Personality Insights Response** as the **Output Type**.
1. Click **Add Service**.

### Wiring
1. Select the Personality Insights Skill.
2. Wire the skill to the input using the plus icon {{< icon "zmdi zmdi-plus icon-circle blue-bg" >}} next to the input service you just created.
3. Wire the skill to the output using the plus icon {{< icon "zmdi zmdi-plus icon-circle green-bg" >}} next to the output that matches the input name for the skill.

## Product attribution
This service leverages the Personality Insights API from IBM Watson Services.

## Skill development
This skill utilizes the Cortex function service to execute custom code.
The function should be developed and tested before the skill is published to Cortex.
  
Wrapper scripts are provided to assist in developing and deploying your skill.
* `build-function.sh` packages the function in build/function.zip
* `deploy-function.sh` builds and deploys the function via Cortex's function apis
* `test-function.sh` invokes the deployed function via Cortex's function api
* `deploy-skill.sh` deploys the skill definition to Cortex's skill catalog

For more information: https://docs.cortex.insights.ai
