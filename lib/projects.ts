export interface Project {
  slug: string
  title: string
  category: string
  shortDescription: string
  description: string
  problem: string
  solution: string
  impact: string
  tools: string[]
  github?: string
  live?: string
  featured: boolean
  year: string
  diagramType: 'etl' | 'realtime' | 'batch' | 'analytics' | 'spark' | 'water'
}

export const projects: Project[] = [
  {
  slug: 'healthcare-claims-platform',
  title: 'Healthcare Claims Analytics Platform',
  category: 'Data Engineering',
  shortDescription: 'End-to-end healthcare claims analytics platform built using Medallion Architecture, dbt, PostgreSQL, Docker, and Streamlit.',
  description: 'Designed and implemented a healthcare analytics platform that ingests, transforms, validates, and visualizes healthcare claims data using a scalable Medallion Architecture.',
  problem: 'Healthcare claims data often exists in fragmented systems, making reporting, analytics, and quality monitoring difficult.',
  solution: 'Built a layered Bronze-Silver-Gold architecture with dbt transformations, PostgreSQL storage, Dockerized deployment, and interactive Streamlit dashboards.',
  impact: 'Improved data quality, enabled self-service analytics, and established a scalable foundation for healthcare reporting.',
  tools: [
    'Python',
    'PostgreSQL',
    'dbt',
    'Docker',
    'Streamlit'
  ],
  github: 'https://github.com/ayomikunadaramola/healthcare-claims-platform',
  featured: true,
  year: '2026',
  diagramType: 'pipeline',
  },
  {
  slug: 'rideshare-analytics-platform',
  title: 'Rideshare Analytics Platform',
  category: 'Data Engineering',
  shortDescription: 'End-to-end rideshare analytics platform built with PostgreSQL, dbt, Streamlit, and Docker.',
  description: 'Built an end-to-end data engineering and analytics platform for rideshare data, covering data ingestion, transformation, modeling, and business reporting through an interactive dashboard.',
  problem: 'Rideshare operational data is often scattered across trips, riders, drivers, payments, and locations, making it difficult to generate reliable business insights.',
  solution: 'Designed a structured analytics workflow using PostgreSQL for storage, dbt for transformations and data modeling, Docker for reproducible deployment, and Streamlit for dashboarding.',
  impact: 'Enabled cleaner reporting on rideshare operations, improved visibility into business metrics, and created a reusable analytics foundation for decision-making.',
  tools: [
    'Python',
    'PostgreSQL',
    'dbt',
    'Streamlit',
    'Docker',
    'SQL',
    'Data Modeling',
    'Analytics Engineering'
  ],
  github: 'https://github.com/ayomikunadaramola/rideshare-analytics-platform',
  live: '#',
  featured: true,
  year: '2026',
  diagramType: 'pipeline',
  },
  {
  slug: 'swiftride-logistics-postgresql-project',
  title: 'SwiftRide Logistics PostgreSQL Project',
  category: 'Database Engineering',
  shortDescription: 'Enterprise PostgreSQL logistics database project featuring multi-schema architecture, RBAC, ERD design, and SQL reporting.',
  description: 'Designed and implemented a PostgreSQL database system for a logistics company, covering operations, fleet, warehouse, and finance workflows with structured schemas, constraints, relationships, and business reporting queries.',
  problem: 'Logistics teams often manage customers, orders, deliveries, drivers, vehicles, warehouses, and payments across disconnected systems, making reporting and access control difficult.',
  solution: 'Built a normalized multi-schema PostgreSQL database with primary keys, foreign keys, constraints, cascading relationships, department-based roles, access control, and analytical SQL queries.',
  impact: 'Improved data organization, strengthened database governance, enabled department-level access control, and supported reliable reporting across logistics operations.',
  tools: [
    'PostgreSQL',
    'SQL',
    'Database Design',
    'ERD',
    'RBAC',
    'Data Modeling',
    'Constraints',
    'Business Reporting'
  ],
  github: 'https://github.com/ayomikunadaramola/swiftride-logistics-postgresql-project',
  live: '#',
  featured: true,
  year: '2026',
  diagramType: 'database',
  },
  {
    slug: 'real-time-crypto-pipeline',
    title: 'Real-Time Crypto Analytics Pipeline',
    category: 'Data Engineering',
    shortDescription: 'Built a real-time crypto analytics pipeline processing live market data for streaming insights.',
    description: 'Designed and implemented a scalable real-time analytics platform using Kafka, Spark Streaming, Airflow, and BigQuery to process and analyze cryptocurrency market events with low latency.',
    problem: 'Traditional batch systems could not provide near real-time visibility into fast-moving cryptocurrency market trends.',
    solution: 'Implemented event-driven ingestion and streaming transformations using Apache Kafka and Spark Streaming with orchestrated workflows.',
    impact: 'Enabled near real-time analytics, improved monitoring visibility, and reduced reporting delays significantly.',
    tools: ['Python', 'Apache Kafka', 'PostgreSQL', 'Docker', 'Docker Compose', 'Streamlit', 'pgAdmin', 'CoinGecko API'],
    github: 'https://github.com/ayomikunadaramola/crypto-streaming-pipeline',
    live: '#',
    featured: true,
    year: '2026',
    diagramType: 'etl',
  },
  {
    slug: 'youtube-data-analysis',
    title: 'End-to-End YouTube Data Analysis Pipeline',
    category: 'Cloud Data Engineering',
    shortDescription: 'Scalable AWS-native pipeline ingesting, transforming, and analyzing YouTube trending data across multiple regions.',
    description: 'Designed and implemented a scalable end-to-end data engineering pipeline to analyze YouTube trending video data across multiple regions. The project involved data ingestion, ETL processing, cloud-based storage, and analytics using AWS services.',
    problem: 'Analyzing large-scale YouTube trending data from multiple regions presents challenges due to high data volume, inconsistent formats (structured + semi-structured JSON), and the need for scalable processing infrastructure that can handle regional data at speed.',
    solution: 'Built a cloud-native data engineering solution on AWS that automates the full data lifecycle — from raw ingestion via S3 to cataloging with Glue, event-driven transformation via Lambda, serverless querying with Athena, and reporting dashboards. The pipeline handles both structured CSV and semi-structured JSON seamlessly.',
    impact: 'Created a scalable cloud-native pipeline capable of processing large YouTube datasets efficiently, improving data accessibility, analytics performance, and enabling trend analysis and audience engagement reporting for data-driven content strategy decisions.',
    tools: ['Python', 'AWS S3', 'AWS Glue', 'AWS Lambda', 'AWS Athena', 'SQL', 'ETL Pipelines'],
    github: 'https://github.com/ayomikunadaramola/DE-PROJECTS/tree/main/END-TO-END%20DE%20PROJECT-%20YouTube%20Data%20Analysis',
    featured: true,
    year: '2024',
    diagramType: 'etl',
  },
  {
    slug: 'uber-data-analytics',
    title: 'Uber Data Analytics | GCP End-to-End Platform',
    category: 'Cloud Data Engineering',
    shortDescription: 'Cloud-based GCP pipeline transforming raw Uber trip data into structured star-schema models for BI and analytics.',
    description: 'Developed a cloud-based end-to-end data engineering solution for analyzing Uber trip data using Python, SQL, Google Cloud Platform (GCP), Mage AI, BigQuery, and Looker Studio.',
    problem: 'Raw transportation data is difficult to analyze at scale due to high data volume, inconsistent formatting, and inefficient reporting processes that leave business insights locked in raw tables.',
    solution: 'Built an automated cloud-native pipeline on GCP — ingesting raw trip data into Cloud Storage, orchestrating transformation with Mage AI, modeling into fact and dimension tables in BigQuery, and surfacing analytics in Looker Studio dashboards.',
    impact: 'Enabled scalable analytics and interactive business reporting by automating ETL workflows and structuring Uber trip data for high-performance querying, supporting data-driven operational and strategic decisions.',
    tools: ['Python', 'SQL', 'GCP', 'Google Cloud Storage', 'Mage AI', 'BigQuery', 'Looker Studio'],
    github: 'https://github.com/ayomikunadaramola/DE-PROJECTS/tree/uber-de-project/Uber-Data-Analytics%20-End-To-End-Data-Engineering-Project',
    featured: true,
    year: '2024',
    diagramType: 'batch',
  }, 
  {
    slug: 'realtime-aws-snowflake',
    title: 'Real-Time Data Pipeline: AWS + Snowflake',
    category: 'Real-Time Data Engineering',
    shortDescription: 'Event-driven real-time pipeline ingesting live weather data through DynamoDB Streams into Snowflake via Snowpipe.',
    description: 'Designed and implemented a real-time cloud-based data pipeline using AWS services and Snowflake to process live weather data with near-zero latency.',
    problem: 'Processing and analyzing real-time streaming data is challenging due to scalability requirements, event-driven processing needs, and the integration complexity between cloud services and data warehouses.',
    solution: 'Built an automated, serverless real-time pipeline: AWS Lambda for scheduled API ingestion → DynamoDB for real-time storage → DynamoDB Streams for event-driven trigger → S3 as staging → Snowpipe for continuous auto-loading → Snowflake for analytics.',
    impact: 'Enabled near real-time processing and analytics of live weather data through an automated cloud-native pipeline, reducing data latency to under 60 seconds and demonstrating modern streaming data engineering architecture.',
    tools: ['AWS Lambda', 'DynamoDB', 'DynamoDB Streams', 'Amazon S3', 'Snowflake', 'Snowpipe', 'Python', 'SQL'],
    github: 'https://github.com/ayomikunadaramola/DE-PROJECTS/tree/real-time-data-pipeline-aws-snowflake/real-time-data-pipeline-aws-snowflake',
    featured: true,
    year: '2024',
    diagramType: 'realtime',
  },
  {
    slug: 'fitness-tracker-spark',
    title: 'Fitness Tracker Big Data Pipeline',
    category: 'Big Data Engineering',
    shortDescription: 'Distributed Spark + Scala pipeline processing large-scale fitness tracker data to uncover user activity trends.',
    description: 'Built a scalable data engineering solution to process and analyze fitness tracker data using Apache Spark and Scala, performing distributed data processing and analysis of user activity patterns.',
    problem: 'Fitness companies struggle to derive meaningful insights from large volumes of raw user activity data due to scalability challenges and inconsistent data formats that traditional tools cannot handle efficiently.',
    solution: 'Developed a distributed big data processing pipeline using Apache Spark and Scala — ingesting raw CSV data into DataFrames, performing distributed cleaning and transformation, analyzing calorie consumption and activity patterns, and generating business insights.',
    impact: 'Improved the ability to analyze large-scale fitness datasets efficiently, uncovered user activity trends and engagement patterns, and supported data-driven strategies for personalized fitness programs and customer retention.',
    tools: ['Apache Spark', 'Scala', 'SQL', 'Docker', 'IntelliJ IDEA'],
    github: 'https://github.com/ayomikunadaramola/DE-PROJECTS/tree/analysis-on-fitness-tracker/fitness-tracker-de-project',
    featured: true,
    year: '2023',
    diagramType: 'spark',
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(p => p.slug === slug)
}

export function getFeaturedProjects(): Project[] {
  return projects.filter(p => p.featured)
}
