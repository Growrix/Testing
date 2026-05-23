import "server-only";

import type { PreviewVariant } from "@/lib/shop";
import type { CaseStudyDetail, StockImage } from "@/lib/site-images";

export type InquiryStatus = "new" | "read" | "responded" | "closed" | "spam";
export type AppointmentStatus = "inquiry" | "confirmed" | "completed" | "cancelled" | "no_show";
export type OrderPaymentStatus = "pending" | "succeeded" | "failed" | "refunded";
export type OrderFulfillmentStatus =
  | "pending"
  | "intake_pending"
  | "fulfilling"
  | "qa_review"
  | "delivered"
  | "archived";
export type Role = "public" | "subscriber" | "customer" | "admin";

export type ContactInquiryRecord = {
  id: string;
  visitor_email: string;
  visitor_name: string;
  company?: string;
  subject: string;
  message: string;
  inquiry_type: "general" | "support" | "partnership" | "other";
  status: InquiryStatus;
  service?: string;
  budget?: string;
  urgency?: string;
  assigned_to_user_id?: string;
  response_message?: string;
  responded_at?: string;
  created_at: string;
  updated_at: string;
};

export type AppointmentRecord = {
  id: string;
  visitor_email: string;
  visitor_name: string;
  visitor_phone?: string;
  service_interested_in: string;
  preferred_datetime: string;
  timezone: string;
  duration_minutes: number;
  status: AppointmentStatus;
  notes?: string;
  calendar_event_id?: string;
  created_at: string;
  confirmed_at?: string;
  completed_at?: string;
};

export type ConversationMessageRecord = {
  id: string;
  role: "user" | "assistant";
  content: string;
  created_at: string;
};

export type ConversationSessionRecord = {
  id: string;
  source: "ai_concierge" | "live_chat";
  status: "active" | "qualified" | "closed";
  page_path: string;
  lead_email?: string;
  messages: ConversationMessageRecord[];
  created_at: string;
  updated_at: string;
};

export type OrderItemRecord = {
  product_slug: string;
  product_name: string;
  product_variant_slug?: string;
  product_tier_name?: string;
  fulfillment_type?: string;
  quantity: number;
  unit_price_cents: number;
  total_cents: number;
};

export type OrderRecord = {
  id: string;
  order_number: string;
  customer_email: string;
  customer_name: string;
  customer_phone?: string;
  payment_status: OrderPaymentStatus;
  fulfillment_status: OrderFulfillmentStatus;
  subtotal_cents: number;
  tax_cents: number;
  discount_cents: number;
  total_cents: number;
  currency: "USD";
  stripe_checkout_session_id?: string;
  stripe_payment_intent_id?: string;
  selected_variant_slug?: string;
  selected_tier_name?: string;
  selected_fulfillment_type?: string;
  items: OrderItemRecord[];
  delivery_urls: string[];
  notes?: string;
  created_at: string;
  completed_at?: string;
  refunded_at?: string;
};

export type UserRecord = {
  id: string;
  email: string;
  password_hash: string;
  role: Role;
  first_name?: string;
  last_name?: string;
  created_at: string;
  updated_at: string;
};

export type ManagedServiceRecord = {
  id: string;
  slug: string;
  title: string;
  description: string;
  short_description: string;
  service_type: string;
  pricing_model: "contact" | "tiered" | "fixed";
  delivery_timeline: string;
  pillars: string[];
};

export type ManagedPortfolioRecord = {
  slug: string;
  name: string;
  livePreviewUrl?: string;
  embeddedPreviewUrl?: string;
  industry: string;
  service: string;
  summary: string;
  metric?: string;
  accent: string;
  hero_image: StockImage | null;
  detail: CaseStudyDetail | null;
};

export type ProductVariantTierName = "Standard" | "Premium" | "Done-For-You";

export type ProductVariantRecord = {
  slug: string;
  tier_name: ProductVariantTierName;
  title: string;
  price: string;
  fulfillment_type: "digital_download" | "hybrid_support" | "done_for_you_service";
  includes: string[];
  comparison_points?: string[];
  recommended?: boolean;
};

export type ProductFaqRecord = {
  question: string;
  answer: string;
};

export type ProductUpsellRecord = {
  title: string;
  description: string;
  cta_label: string;
  cta_href: string;
};

export type ManagedProductRecord = {
  slug: string;
  name: string;
  price: string;
  livePreviewUrl?: string;
  embeddedPreviewUrl?: string;
  category: string;
  categorySlug: string;
  type: string;
  typeSlug: string;
  industry: string;
  industrySlug: string;
  tag?: string;
  published?: boolean;
  rating?: number;
  reviewCount?: string;
  salesCount?: string;
  teaser: string;
  summary: string;
  audience: string;
  features?: string[];
  variants?: ProductVariantRecord[];
  faqs?: ProductFaqRecord[];
  related_product_slugs?: string[];
  related_service_slugs?: string[];
  customization_upsells?: ProductUpsellRecord[];
  previewVariant: PreviewVariant;
  includes: string[];
  inScope?: string[];
  outOfScope?: string[];
  enhancementPlan?: string[];
  stack: string[];
  highlights: { label: string; value: string }[];
  image: StockImage | null;
  gallery?: StockImage[];
};

export type AnalyticsEventRecord = {
  id: string;
  event_name: string;
  route: string;
  source: string;
  actor_email?: string;
  metadata: Record<string, unknown>;
  created_at: string;
};

export type AuditLogRecord = {
  id: string;
  level: "info" | "warning" | "error";
  action: string;
  request_id?: string;
  actor_email?: string;
  ip?: string;
  metadata: Record<string, unknown>;
  created_at: string;
};

export type NewsletterSubscriberRecord = {
  id: string;
  email: string;
  subscribed_at: string;
  source: string;
};

export type DatabaseSchema = {
  inquiries: ContactInquiryRecord[];
  appointments: AppointmentRecord[];
  conversations: ConversationSessionRecord[];
  orders: OrderRecord[];
  users: UserRecord[];
  services: ManagedServiceRecord[];
  portfolio_projects: ManagedPortfolioRecord[];
  products: ManagedProductRecord[];
  analytics_events: AnalyticsEventRecord[];
  audit_logs: AuditLogRecord[];
  newsletter_subscribers: NewsletterSubscriberRecord[];
};

export const DEFAULT_DATABASE: DatabaseSchema = {
  inquiries: [],
  appointments: [],
  conversations: [],
  orders: [],
  users: [],
  services: [],
  portfolio_projects: [],
  products: [],
  analytics_events: [],
  audit_logs: [],
  newsletter_subscribers: [],
};
