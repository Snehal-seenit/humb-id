import React from 'react';
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useState } from "react";

export default function ContactFormSection() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    success: false,
    message: "",
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitStatus({ success: false, message: "" });

    try {
      const formData = new FormData();
      formData.append("first_name", data.firstName);
      formData.append("email", data.email);
      formData.append("phone", data.phone);
      formData.append("submit", data.subject || "HUMB");
      formData.append("message", data.message);

      const response = await fetch("https://formspree.io/f/xpwplkey", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setSubmitStatus({
          success: true,
          message: "Message sent successfully!",
        });
        reset(); // Reset the form after successful submission
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: "",
      });
	  reset(); // Reset the form after successful submission
    } finally {
      setIsSubmitting(false);
	  reset(); // Reset the form after successful submission
    }
  };

  return (
    <div className="fugu--contact-section white-version">
      <div className="container">
        <div className="fugu--contact-column">
          <div className="row">
            <div className="col-lg-8 m-auto">
              <div className="fugu--contact-form wow fadeInUpX">
                <h3>Send Us A Message</h3>
                <p>
                  Your email address will not be published. Required fields are
                  marked*
                </p>
                {submitStatus.message && (
                  <div
                    className={`fugu--form-message ${
                      submitStatus.success ? "success" : "error"
                    }`}
                  >
                    {submitStatus.message}
                  </div>
                )}
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="fugu--comment-field">
                    <input
                      type="text"
                      placeholder="First Name*"
                      {...register("firstName", { required: true })}
                      aria-invalid={errors.firstName ? "true" : "false"}
                    />
                    {errors.firstName?.type === "required" && (
                      <p role="alert" className="error">
                        First name is required
                      </p>
                    )}
                  </div>
                  <div className="fugu--comment-field">
                    <input
                      type="email"
                      placeholder="Email*"
                      {...register("email", {
                        required: true,
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address",
                        },
                      })}
                      aria-invalid={errors.email ? "true" : "false"}
                    />
                    {errors.email?.type === "required" && (
                      <p role="alert" className="error">
                        Email is required
                      </p>
                    )}
                    {errors.email?.type === "pattern" && (
                      <p role="alert" className="error">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                  <div className="fugu--comment-field">
                    <input
                      type="tel"
                      placeholder="Phone*"
                      {...register("phone", {
                        required: true,
                        pattern: {
                          value: /^[0-9]{10,15}$/,
                          message: "Invalid phone number",
                        },
                      })}
                      aria-invalid={errors.phone ? "true" : "false"}
                    />
                    {errors.phone?.type === "required" && (
                      <p role="alert" className="error">
                        Phone is required
                      </p>
                    )}
                    {errors.phone?.type === "pattern" && (
                      <p role="alert" className="error">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>
                  <div className="fugu--comment-field">
                    <input
                      type="text"
                      placeholder="Subject*"
                      {...register("subject", { required: true })}
                      aria-invalid={errors.subject ? "true" : "false"}
                    />
                    {errors.subject?.type === "required" && (
                      <p role="alert" className="error">
                        Subject is required
                      </p>
                    )}
                  </div>
                  <div className="fugu--comment-field">
                    <textarea
                      placeholder="Your Message*"
                      {...register("message", { required: true })}
                      aria-invalid={errors.message ? "true" : "false"}
                    ></textarea>
                    {errors.message?.type === "required" && (
                      <p role="alert" className="error">
                        Message is required
                      </p>
                    )}
                  </div>
                  <button
                    id="fugu--form-submit-btn"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Submit Now"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
