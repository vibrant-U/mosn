#include "unisonComponent.h"

unisonComponent::unisonComponent (juce::AudioProcessorValueTreeState& vts)
    : valueTreeState (vts)
{
}

unisonComponent::~unisonComponent()
{
}

void unisonComponent::paint (juce::Graphics& g)
{
    g.fillAll (juce::Colours::darkgrey);
    g.setColour (juce::Colours::white);
    g.drawText ("Unison Component", getLocalBounds(), juce::Justification::centred);
}

void unisonComponent::resized()
{
}
