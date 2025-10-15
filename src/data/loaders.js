import { fetchAPI } from "@/lib/api";
import getStrapiURL from "@/lib/get-strapi-url";
import qs from "qs";

export async function getHomePage() {
  const homepagePopulateObj = {
    populate: {
      carouselSection: {
        populate: {
          carousels: { populate: ["image"] },
        },
      },
      companiesSection: {
        populate: ["logos"],
      },
      bentoGridSection: {
        populate: {
          bentoGrids: { populate: ["image", "video"] },
        },
      },
      Banner: {
        populate: ["backgroundVideo"],
      },
      productSection: {
        populate: {
          productCards: { populate: ["Image"] },
        },
      },
      industriesSection: {
        populate: {
          Industries: { populate: ["image"] },
        },
      },
      CtaSection: true,
    },
  };

  const queryString = qs.stringify(homepagePopulateObj, {
    encodeValuesOnly: true,
  });
  const BASE_URL = getStrapiURL();
  const path = `/api/home-page?${queryString}`;
  const url = new URL(path, BASE_URL);

  return await fetchAPI(url.href,{ 
    method: "GET",
    cache: "force-cache",
    next: { revalidate: 600 },
     });
}

export async function getGlobal() {
  const populateObj = {
    populate: {
      Header: {
        populate: {
          logo: {
            populate: {
              image: true,
            },
          },
          menus: {
            populate: {
              dropdownItems: true,
            },
          },
          cta: true,
        },
      },
      Footer: {
        populate: {
          logo: {
            populate: {
              image: true,
            },
          },
          links: true,
          linkGroup: {
            populate: {
              link: true,
            },
          },
          contact: true,
        },
      },
    },
  };

  const queryString = qs.stringify(populateObj, { encodeValuesOnly: true });

  const BASE_URL = getStrapiURL();
  const path = `/api/global?${queryString}`;
  const url = new URL(path, BASE_URL);

  return await fetchAPI(url.href,{ 
    method: "GET",
    cache: "force-cache",
    next: { revalidate: 600 },
     });
}

export async function getSolutionsPage() {
  const solutionsPopulateObj = {
    populate: {
      Infrastructure: {
        populate: {
          Section: {
            populate: {
              Card: {
                populate: {
                  icon: {
                    fields: ["url", "name", "alternativeText"],
                  },
                  image: {
                    fields: ["url", "name", "alternativeText"],
                  },
                },
              },
            },
          },
        },
      },
      CyberSecurity: {
        populate: {
          Section: {
            populate: {
              Card: {
                populate: {
                  icon: {
                    fields: ["url", "name", "alternativeText"],
                  },
                  image: {
                    fields: ["url", "name", "alternativeText"],
                  },
                },
              },
            },
          },
        },
      },
      Storage: {
        populate: {
          Section: {
            populate: {
              Card: {
                populate: {
                  icon: {
                    fields: ["url", "name", "alternativeText"],
                  },
                  image: {
                    fields: ["url", "name", "alternativeText"],
                  },
                },
              },
            },
          },
        },
      },
      Network: {
        populate: {
          Section: {
            populate: {
              Card: {
                populate: {
                  icon: {
                    fields: ["url", "name", "alternativeText"],
                  },
                  image: {
                    fields: ["url", "name", "alternativeText"],
                  },
                },
              },
            },
          },
        },
      },
      EndPoint: {
        populate: {
          Section: {
            populate: {
              Card: {
                populate: {
                  icon: {
                    fields: ["url", "name", "alternativeText"],
                  },
                  image: {
                    fields: ["url", "name", "alternativeText"],
                  },
                },
              },
            },
          },
        },
      },
      Printer: {
        populate: {
          Section: {
            populate: {
              Card: {
                populate: {
                  icon: {
                    fields: ["url", "name", "alternativeText"],
                  },
                  image: {
                    fields: ["url", "name", "alternativeText"],
                  },
                },
              },
            },
          },
        },
      },
      Hpc: {
        populate: {
          image: {
            fields: ["url", "name", "alternativeText"],
          },
        },
      },
      Cloud: {
        populate: {
          Section: {
            populate: {
              Card: {
                populate: {
                  icon: {
                    fields: ["url", "name", "alternativeText"],
                  },
                  image: {
                    fields: ["url", "name", "alternativeText"],
                  },
                },
              },
            },
          },
        },
      },
      Aiml: {
        populate: {
          Section: {
            populate: {
              Card: {
                populate: {
                  icon: {
                    fields: ["url", "name", "alternativeText"],
                  },
                  image: {
                    fields: ["url", "name", "alternativeText"],
                  },
                },
              },
            },
          },
        },
      },
      Cta: true,
    },
  };
  
  const queryString = qs.stringify(solutionsPopulateObj, {
    encodeValuesOnly: true,
  });
  const BASE_URL = getStrapiURL();
  const path = `/api/solutions-page?${queryString}`;
  const url = new URL(path, BASE_URL);

  return await fetchAPI(url.href,{ 
    method: "GET",
    cache: "force-cache",
    next: { revalidate: 600 },
     });
}

export async function getCompanyPage() {
  const companyPopulateObj = {
    populate: {
      Banner: {
        fields: ["title", "description"],
      },
      Story: {
        fields: ["title", "description"],
        populate: {
          image: {
            fields: ["url", "name"],
          },
        },
      },
      Vision: {
        fields: ["title", "description"],
        populate: {
          Stats: {
            fields: ["label", "count"],
          },
        },
      },
      Life: {
        fields: ["title", "description"],
        populate: {
          image: {
            fields: ["url", "name"],
          },
        },
      },
      Values: {
        fields: ["title", "description"],
        populate: {
          Values: {
            fields: ["title", "description"],
          },
        },
      },
      Career: {
        fields: ["title", "description"],
        populate: {
          Job: {
            fields: ["title", "type", "level"],
          },
        },
      },
      Cta: {
        fields: ["title", "description", "ctaText", "ctaLink"],
      },
      Heads: {
        fields: ["title"],
        populate: {
          Photos: {
            fields: ["name", "designation", "href"],
            populate: {
              image: {
                fields: ["url", "name"],
              },
            },
          },
        },
      },
    },
  };
  
  
  const queryString = qs.stringify(companyPopulateObj, {
    encodeValuesOnly: true,
  });
  const BASE_URL = getStrapiURL();
  const path = `/api/company-page?${queryString}`;
  const url = new URL(path, BASE_URL);

  return await fetchAPI(url.href,{ 
    method: "GET",
    cache: "force-cache",
    next: { revalidate: 600 },
     });
}

export async function getContactPage() {
  const contactPopulateObj = {
    populate: {
        Location: {
        populate: {
          Card: {
            fields: ["title", "description"],
            populate: {
              icon: { fields: ["url", "name"] },
              image: { fields: ["url", "name"] },
            },
          },
        },
      },
      Links: {
        fields: ["platform", "url"],
      },
    },
  };
  
  const queryString = qs.stringify(contactPopulateObj, {
    encodeValuesOnly: true,
  });
  const BASE_URL = getStrapiURL();
  const path = `/api/contact-page?${queryString}`;
  const url = new URL(path, BASE_URL);

  return await fetchAPI(url.href,{ 
    method: "GET",
    cache: "force-cache",
    next: { revalidate: 600 },
     });
}


export async function getIndustriesPage() {

  const industriesPopulateObj = {
    populate: {
      banner: {
        fields: ["url", "name", "alternativeText"],
      },
      IndustryCard: {
        populate: {
          image: { fields: ["url", "name", "alternativeText"] },
          icon: { fields: ["url", "name", "alternativeText"] },
        },
      },
    },
  };

  const queryString = qs.stringify(industriesPopulateObj, {
    encodeValuesOnly: true,
  });
  const BASE_URL = getStrapiURL();
  const path = `/api/industries?${queryString}`;
  const url = new URL(path, BASE_URL);

  return await fetchAPI(url.href,{ 
    method: "GET",
    cache: "force-cache",
    next: { revalidate: 600 },
     });
}

export async function getCaseStudyPage() {

  const casesPopulateObj = {
    fields: ["heading", "slug", "challenge", "solution", "result"],
    populate: {
      image: {
        fields: ["url", "name", "alternativeText"]
      }
    }
  };
  

  const queryString = qs.stringify(casesPopulateObj, {
    encodeValuesOnly: true,
  });
  const BASE_URL = getStrapiURL();
  const path = `/api/case-studies?${queryString}`;
  const url = new URL(path, BASE_URL);

  return await fetchAPI(url.href,{ 
    method: "GET",
    cache: "force-cache",
    next: { revalidate: 600 },
     });
}

export async function postContactForm(formData) {
  const BASE_URL = getStrapiURL();
  const path = `/api/contact-forms`;
  const url = new URL(path, BASE_URL);

  try {
    const res = await fetch(url.href, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        },
      }),
    });

    if (!res.ok) {
      throw new Error("Failed to submit contact form");
    }

    return await res.json();
  } catch (error) {
    console.error("Error submitting contact form:", error);
    throw error;
  }
}


export async function postJobForm(formData) {
  const BASE_URL = getStrapiURL();
  const path = `/api/job-applications`;
  const url = new URL(path, BASE_URL);

  const body = {
    data: {
      name: formData.name,
      email: formData.email,
      contact: formData.contact,
      location: formData.location,
    },
  };

  try {
    const res = await fetch(url.href, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!res.ok) throw new Error("Failed to submit job form");
    return await res.json();
  } catch (error) {
    console.error("Error submitting job form:", error);
    throw error;
  }
}
