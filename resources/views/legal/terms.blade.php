@extends('layouts.storefront')

@section('title', 'Terms & Conditions')
@section('meta_description', 'Terms and conditions for quotations, products, and smart-home services from afaq.smart.')

@section('content')
<article class="max-w-3xl mx-auto px-5 py-10 sm:py-14">
    <header class="mb-8 pb-6 border-b border-[var(--sf-line)]">
        <p class="text-xs font-semibold uppercase tracking-widest text-[var(--sf-muted)] mb-2">Legal</p>
        <h1 class="sf-display text-3xl sm:text-4xl text-[var(--sf-ink)] mb-2">الشروط والأحكام</h1>
        <h2 class="text-lg font-semibold text-[var(--sf-ink)]">Terms &amp; Conditions</h2>
        <p class="mt-3 text-sm text-[var(--sf-muted)]">شركة الأفاق للبيوت الذكية · afaq.smart · Last updated {{ date('Y-m-d') }}</p>
    </header>

    <div class="space-y-8 text-sm leading-relaxed text-[var(--sf-ink)]" dir="rtl">
        <section class="space-y-2">
            <h3 class="text-base font-bold">1. القبول / Acceptance</h3>
            <p>
                باستلام عرض السعر أو التوقيع عليه أو الموافقة عليه بأي وسيلة، يُعد العميل موافقاً على هذه الشروط والأحكام بالكامل.
                By receiving, signing, or otherwise approving a quotation, the client accepts these Terms &amp; Conditions in full.
            </p>
        </section>

        <section class="space-y-2">
            <h3 class="text-base font-bold">2. عروض الأسعار / Quotations</h3>
            <p>
                عرض السعر صالح لمدة 14 يوماً من تاريخ إصداره ما لم يُذكر خلاف ذلك كتابةً. الأسعار بالريال العماني (OMR) وتشمل أو تستثني الضريبة حسب ما يظهر في العرض.
                Quotations are valid for 14 days from the issue date unless stated otherwise in writing. Prices are in Omani Rial (OMR) and include or exclude tax as shown on the quotation.
            </p>
        </section>

        <section class="space-y-2">
            <h3 class="text-base font-bold">3. الأجهزة والخدمات / Products &amp; services</h3>
            <p>
                تشمل العروض الأجهزة الذكية و/أو البرمجة و/أو التركيب حسب البنود المذكورة. أي تغيير في الكميات أو المواصفات بعد الموافقة قد يؤدي إلى تعديل السعر ومدة التنفيذ.
                Quotations may include smart devices and/or programming and/or installation as listed. Changes to quantities or specifications after approval may change price and schedule.
            </p>
        </section>

        <section class="space-y-2">
            <h3 class="text-base font-bold">4. الدفع / Payment</h3>
            <p>
                شروط الدفع تُحدد في العرض أو الاتفاق المكتوب. قد يُطلب دفعة مقدمة قبل التوريد أو التركيب. التأخير في الدفع قد يؤخر التسليم أو التركيب.
                Payment terms are as stated on the quotation or written agreement. A deposit may be required before supply or installation. Late payment may delay delivery or installation.
            </p>
        </section>

        <section class="space-y-2">
            <h3 class="text-base font-bold">5. التركيب والبرمجة / Installation &amp; programming</h3>
            <p>
                مواعيد التركيب تقديرية وتعتمد على جاهزية الموقع والكهرباء والشبكة وموافقة العميل على التصميم. العميل مسؤول عن توفير وصول آمن للموقع والمعلومات اللازمة.
                Installation dates are estimates and depend on site readiness, power, network, and design approval. The client must provide safe site access and required information.
            </p>
        </section>

        <section class="space-y-2">
            <h3 class="text-base font-bold">6. الضمان / Warranty</h3>
            <p>
                ضمان الأجهزة يخضع لسياسة الشركة المصنعة حيث ينطبق. أعمال البرمجة والتركيب تغطيها سياسة خدمة الشركة حسب الاتفاق. سوء الاستخدام أو التعديل من طرف ثالث قد يلغي الضمان.
                Device warranties follow manufacturer policy where applicable. Programming and installation are covered by the company service policy as agreed. Misuse or third-party modification may void warranty.
            </p>
        </section>

        <section class="space-y-2">
            <h3 class="text-base font-bold">7. المسؤولية / Liability</h3>
            <p>
                لا تتحمل الشركة المسؤولية عن أضرار غير مباشرة أو خسائر تبعية ناتجة عن تأخير طرف ثالث أو أعطال شبكة أو كهرباء خارجة عن السيطرة. الحد الأقصى للمسؤولية يقتصر على قيمة البنود المتأثرة في العرض المعتمد.
                The company is not liable for indirect or consequential damages arising from third-party delays or power/network failures beyond its control. Maximum liability is limited to the value of the affected items on the approved quotation.
            </p>
        </section>

        <section class="space-y-2">
            <h3 class="text-base font-bold">8. الإلغاء / Cancellation</h3>
            <p>
                إلغاء الطلب بعد الموافقة قد يخضع لرسوم حسب حالة التوريد أو العمل المنجز. المنتجات الخاصة أو المطلوبة حسب الطلب قد لا تكون قابلة للإرجاع.
                Cancellation after approval may incur charges based on supply status or work completed. Special-order items may be non-returnable.
            </p>
        </section>

        <section class="space-y-2">
            <h3 class="text-base font-bold">9. القانون الواجب التطبيق / Governing law</h3>
            <p>
                تخضع هذه الشروط لأنظمة سلطنة عُمان. أي نزاع يُحل ودياً أولاً، ثم وفق الجهات المختصة في سلطنة عُمان.
                These terms are governed by the laws of the Sultanate of Oman. Disputes shall first be resolved amicably, then before the competent authorities in Oman.
            </p>
        </section>

        <section class="space-y-2">
            <h3 class="text-base font-bold">10. التواصل / Contact</h3>
            <p>
                للاستفسار عن الشروط أو العروض: شركة الأفاق للبيوت الذكية · afaq.smart
                For questions about these terms or quotations: afaq.smart
            </p>
        </section>
    </div>
</article>
@endsection
